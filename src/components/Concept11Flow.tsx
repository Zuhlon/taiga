'use client'

import { useCallback, useState, memo, useEffect } from 'react'
import {
  ReactFlow,
  Node,
  Edge,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  Position,
  Handle,
  NodeProps,
  BackgroundVariant,
  MarkerType,
  ConnectionLineType,
} from '@xyflow/react'
import '@xyflow/react/dist/style.css'

// ============================================
// ЦВЕТОВАЯ ПАЛИТРА
// ============================================
const C = {
  bg: '#0A0A12',
  bgAlt: '#12121F',
  bgCard: '#1A1A2E',
  bgNode: '#1E1E38',
  text: '#FFFFFF',
  textMuted: '#9CA3AF',
  purple: '#8B5CF6',
  purpleLight: '#A78BFA',
  blue: '#3B82F6',
  cyan: '#06B6D4',
  green: '#10B981',
  orange: '#F59E0B',
  red: '#EF4444',
  yellow: '#FACC15',
  gradient: 'linear-gradient(135deg, #8B5CF6 0%, #3B82F6 50%, #06B6D4 100%)',
  border: 'rgba(139, 92, 246, 0.2)',
}

// ============================================
// CUSTOM NODE: CENTRAL DASHBOARD (TRAFFIC LIGHT)
// ============================================
interface CentralNodeData {
  connectedCount: number
  totalServices: number
  onClick?: () => void
}

const CentralNode = memo(({ data }: NodeProps) => {
  const nodeData = data as CentralNodeData
  const connectedCount = nodeData.connectedCount || 0
  const totalServices = nodeData.totalServices || 3
  const onClick = nodeData.onClick

  return (
    <div
      onClick={onClick}
      style={{
      width: 180,
      height: 180,
      borderRadius: '50%',
      background: `radial-gradient(circle at 30% 30%, #2A2A4A, ${C.bgCard})`,
      border: `3px solid ${C.purple}`,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: `0 0 60px rgba(139, 92, 246, 0.4), inset 0 0 40px rgba(139, 92, 246, 0.1)`,
      cursor: onClick ? 'pointer' : 'grab',
      transition: 'all 0.3s ease',
    }}>
      {/* Handles for connections - all sides */}
      <Handle type="source" position={Position.Top} id="top" style={{
        width: 14,
        height: 14,
        background: C.purple,
        border: `2px solid ${C.bg}`,
        top: -2,
      }} />
      <Handle type="source" position={Position.Right} id="right" style={{
        width: 14,
        height: 14,
        background: C.purple,
        border: `2px solid ${C.bg}`,
        right: -2,
      }} />
      <Handle type="source" position={Position.Bottom} id="bottom" style={{
        width: 14,
        height: 14,
        background: C.purple,
        border: `2px solid ${C.bg}`,
        bottom: -2,
      }} />
      <Handle type="source" position={Position.Left} id="left" style={{
        width: 14,
        height: 14,
        background: C.purple,
        border: `2px solid ${C.bg}`,
        left: -2,
      }} />

      <div style={{ fontSize: '40px', marginBottom: '4px' }}>🚦</div>
      <div style={{ fontWeight: 800, fontSize: '14px', textAlign: 'center' }}>
        Дашборд
      </div>
      <div style={{
        marginTop: '8px',
        padding: '4px 12px',
        borderRadius: 20,
        background: 'rgba(16, 185, 129, 0.2)',
        color: C.green,
        fontSize: '11px',
        fontWeight: 600,
      }}>
        {connectedCount}/{totalServices} активны
      </div>
      {onClick && (
        <div style={{
          marginTop: '8px',
          fontSize: '9px',
          color: C.textMuted,
          opacity: 0.7,
        }}>
          Нажмите для деталей
        </div>
      )}
    </div>
  )
})
CentralNode.displayName = 'CentralNode'

// ============================================
// CUSTOM NODE: SERVICE
// ============================================
interface ServiceNodeData {
  id: string
  label: string
  icon: string
  description: string
  connected: boolean
  stats: Record<string, number>
  onToggle: () => void
  onSelect: () => void
}

const ServiceNode = memo(({ data }: NodeProps) => {
  const nodeData = data as ServiceNodeData
  const { id, label, icon, connected, stats, onSelect } = nodeData

  // Pie chart for missed calls widget
  const renderPieChart = () => {
    if (id !== 'missed' || !stats) return null
    
    const callback = stats.callback || 38
    const lost = stats.lost || 9
    const total = callback + lost
    
    const callbackPercent = Math.round((callback / total) * 100)
    const lostPercent = 100 - callbackPercent
    
    const size = 70
    const center = size / 2
    const radius = size / 2 - 4
    const circumference = 2 * Math.PI * radius
    
    const callbackLength = (callbackPercent / 100) * circumference
    const lostLength = (lostPercent / 100) * circumference
    
    return (
      <div style={{ marginTop: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
            <circle
              cx={center}
              cy={center}
              r={radius}
              fill="none"
              stroke={C.bgAlt}
              strokeWidth={8}
            />
            <circle
              cx={center}
              cy={center}
              r={radius}
              fill="none"
              stroke={C.red}
              strokeWidth={8}
              strokeDasharray={`${lostLength} ${circumference}`}
              strokeDashoffset={0}
              strokeLinecap="round"
            />
            <circle
              cx={center}
              cy={center}
              r={radius}
              fill="none"
              stroke={C.green}
              strokeWidth={8}
              strokeDasharray={`${callbackLength} ${circumference}`}
              strokeDashoffset={-lostLength}
              strokeLinecap="round"
            />
          </svg>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{ width: 8, height: 8, borderRadius: 2, background: C.green }} />
              <span style={{ fontSize: '10px', color: C.textMuted }}>Перезвонили</span>
              <span style={{ fontSize: '11px', fontWeight: 700, marginLeft: 'auto' }}>{callback}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{ width: 8, height: 8, borderRadius: 2, background: C.red }} />
              <span style={{ fontSize: '10px', color: C.textMuted }}>Потеряны</span>
              <span style={{ fontSize: '11px', fontWeight: 700, marginLeft: 'auto' }}>{lost}</span>
            </div>
          </div>
        </div>
        
        <div style={{
          marginTop: '8px',
          padding: '6px 10px',
          borderRadius: 8,
          background: 'rgba(16, 185, 129, 0.1)',
          textAlign: 'center',
        }}>
          <span style={{ fontSize: '10px', color: C.textMuted }}>Конверсия: </span>
          <span style={{ fontSize: '12px', fontWeight: 700, color: C.green }}>{callbackPercent}%</span>
        </div>
      </div>
    )
  }

  return (
    <div
      onClick={onSelect}
      style={{
        width: 200,
        padding: '16px',
        borderRadius: 16,
        background: connected
          ? `linear-gradient(135deg, ${C.bgNode}, ${C.bgCard})`
          : C.bgAlt,
        border: `2px solid ${connected ? C.purple : C.border}`,
        cursor: 'pointer',
        transition: 'all 0.3s',
        opacity: connected ? 1 : 0.5,
        boxShadow: connected ? `0 0 30px rgba(139, 92, 246, 0.3)` : 'none',
      }}
    >
      {/* Handles on all sides for better connections */}
      <Handle type="target" position={Position.Left} id="left" style={{
        width: 12,
        height: 12,
        background: connected ? C.green : C.textMuted,
        border: `2px solid ${C.bg}`,
      }} />
      <Handle type="target" position={Position.Top} id="top" style={{
        width: 12,
        height: 12,
        background: connected ? C.green : C.textMuted,
        border: `2px solid ${C.bg}`,
      }} />
      <Handle type="target" position={Position.Right} id="right" style={{
        width: 12,
        height: 12,
        background: connected ? C.green : C.textMuted,
        border: `2px solid ${C.bg}`,
      }} />
      <Handle type="target" position={Position.Bottom} id="bottom" style={{
        width: 12,
        height: 12,
        background: connected ? C.green : C.textMuted,
        border: `2px solid ${C.bg}`,
      }} />

      {/* Connection indicator */}
      <div style={{
        position: 'absolute',
        top: -8,
        right: -8,
        width: 20,
        height: 20,
        borderRadius: '50%',
        background: connected ? C.green : C.textMuted,
        border: `3px solid ${C.bg}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '10px',
        fontWeight: 700,
        color: '#fff',
      }}>
        {connected ? '✓' : '+'}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
        <div style={{
          width: 40,
          height: 40,
          borderRadius: 12,
          background: connected ? C.gradient : C.bgAlt,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '20px',
        }}>
          {icon}
        </div>
        <div>
          <div style={{ fontWeight: 700, fontSize: '14px' }}>{label}</div>
          <div style={{ fontSize: '11px', color: C.textMuted }}>
            {connected ? 'Подключён' : 'Не подключён'}
          </div>
        </div>
      </div>

      {/* Mini stats or Pie Chart */}
      {connected && stats && (
        id === 'missed' ? (
          renderPieChart()
        ) : (
          <div style={{
            display: 'flex',
            gap: '8px',
            flexWrap: 'wrap',
          }}>
            {Object.entries(stats).slice(0, 2).map(([key, value]) => (
              <div key={key} style={{
                padding: '4px 10px',
                borderRadius: 8,
                background: C.bgAlt,
                fontSize: '11px',
              }}>
                {typeof value === 'number' ? value.toLocaleString() : value}
              </div>
            ))}
          </div>
        )
      )}
    </div>
  )
})
ServiceNode.displayName = 'ServiceNode'

// ============================================
// CUSTOM NODE: STATS PANEL
// ============================================
interface StatsPanelData {
  callsConnected: boolean
  missedConnected: boolean
  callcenterConnected: boolean
}

const StatsPanelNode = memo(({ data }: NodeProps) => {
  const statsData = data as StatsPanelData
  const { callsConnected, missedConnected, callcenterConnected } = statsData

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '12px',
      width: 660,
    }}>
      {/* Calls Trend Chart */}
      {callsConnected && (
        <div style={{
          background: C.bgCard,
          borderRadius: 12,
          padding: '14px',
          border: `1px solid ${C.border}`,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px' }}>
            <span style={{ fontSize: '14px' }}>📞</span>
            <span style={{ fontSize: '11px', fontWeight: 600 }}>Звонки по дням</span>
          </div>
          <svg viewBox="0 0 160 50" style={{ width: '100%', height: 50 }}>
            <polyline
              points="10,40 30,35 50,38 70,28 90,32 110,22 130,26 150,20"
              fill="none"
              stroke={C.purple}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient id="chartGradFlow" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor={C.purple} stopOpacity="0.3" />
                <stop offset="100%" stopColor={C.purple} stopOpacity="0" />
              </linearGradient>
            </defs>
            <polygon
              points="10,40 30,35 50,38 70,28 90,32 110,22 130,26 150,20 150,50 10,50"
              fill="url(#chartGradFlow)"
            />
          </svg>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '4px' }}>
            <span style={{ fontSize: '16px', fontWeight: 800 }}>1,247</span>
            <span style={{ fontSize: '11px', color: C.green }}>↑ 12%</span>
          </div>
        </div>
      )}

      {/* Missed Calls */}
      {missedConnected && (
        <div style={{
          background: C.bgCard,
          borderRadius: 12,
          padding: '14px',
          border: `1px solid ${C.border}`,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px' }}>
            <span style={{ fontSize: '14px' }}>📱</span>
            <span style={{ fontSize: '11px', fontWeight: 600 }}>Пропущенные</span>
          </div>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '18px', fontWeight: 800, color: C.purple }}>23</div>
              <div style={{ fontSize: '9px', color: C.textMuted }}>Сегодня</div>
            </div>
            <div style={{ fontSize: '16px', color: C.textMuted }}>vs</div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '18px', fontWeight: 800, color: C.orange }}>47</div>
              <div style={{ fontSize: '9px', color: C.textMuted }}>Вчера</div>
            </div>
          </div>
          <div style={{
            marginTop: '8px',
            padding: '6px 10px',
            borderRadius: 8,
            background: 'rgba(16, 185, 129, 0.1)',
            textAlign: 'center',
          }}>
            <span style={{ fontSize: '11px', fontWeight: 700, color: C.green }}>-51%</span>
          </div>
        </div>
      )}

      {/* Call Center Rating */}
      <div style={{
        background: C.bgCard,
        borderRadius: 12,
        padding: '14px',
        border: `1px solid ${callcenterConnected ? C.border : `1px dashed ${C.border}`}`,
        opacity: callcenterConnected ? 1 : 0.4,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px' }}>
          <span style={{ fontSize: '14px' }}>👥</span>
          <span style={{ fontSize: '11px', fontWeight: 600 }}>Рейтинг</span>
        </div>
        {callcenterConnected ? (
          <>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontSize: '12px' }}>👑</span>
                <span style={{ fontSize: '12px', fontWeight: 600 }}>Анна С.</span>
              </div>
              <span style={{ fontSize: '14px', fontWeight: 800, color: C.green }}>4.9</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontSize: '12px' }}>⚠️</span>
                <span style={{ fontSize: '12px', fontWeight: 600 }}>Игорь М.</span>
              </div>
              <span style={{ fontSize: '14px', fontWeight: 800, color: C.red }}>3.2</span>
            </div>
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '8px 0' }}>
            <span style={{ fontSize: '10px', color: C.textMuted }}>Подключите</span>
          </div>
        )}
      </div>
    </div>
  )
})
StatsPanelNode.displayName = 'StatsPanelNode'

// ============================================
// NODE TYPES
// ============================================
const nodeTypes = {
  central: CentralNode,
  service: ServiceNode,
  statsPanel: StatsPanelNode,
}

// ============================================
// INITIAL POSITIONS
// ============================================
const initialNodePositions = {
  central: { x: 500, y: 250 },
  stats: { x: 170, y: 420 },
  calls: { x: 100, y: 80 },
  missed: { x: 780, y: 80 },
  callcenter: { x: 440, y: 80 },
}

// ============================================
// MAIN COMPONENT
// ============================================
export default function Concept11Flow() {
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [showSettings, setShowSettings] = useState(false)
  const [showDashboardModal, setShowDashboardModal] = useState(false)
  const [services, setServices] = useState([
    {
      id: 'calls',
      name: 'Записи разговоров',
      icon: '📞',
      description: 'Речевая аналитика и оценка разговоров',
      connected: true,
      stats: { calls: 1247, analyzed: 1156, score: 87 },
      settings: { autoAnalyze: true, keywords: ['покупка', 'цена', 'доставка'] }
    },
    {
      id: 'missed',
      name: 'Пропущенные звонки',
      icon: '📱',
      description: 'Отчёт по обработке пропущенных звонков',
      connected: true,
      stats: { missed: 47, callback: 38, lost: 9 },
      settings: { autoCallback: true, callbackTime: 30 }
    },
    {
      id: 'callcenter',
      name: 'Колл-центр',
      icon: '👥',
      description: '10 сотрудников с рейтингом работы',
      connected: false,
      stats: { operators: 10, active: 8, avgRating: 4.7 },
      settings: { ratingSystem: true, trainingMode: false }
    },
  ])

  const [chatMessages, setChatMessages] = useState([
    { role: 'assistant', content: 'Привет! Я помогу настроить ваш дашборд. Вижу, что у вас подключено 2 сервиса из 3. Хотите подключить Колл-центр?' }
  ])
  const [inputMessage, setInputMessage] = useState('')

  // Toggle connection for a service
  const toggleConnection = useCallback((serviceId: string) => {
    setServices(prev => {
      const newServices = prev.map(s =>
        s.id === serviceId ? { ...s, connected: !s.connected } : s
      )
      
      const service = prev.find(s => s.id === serviceId)
      if (service) {
        setTimeout(() => {
          setChatMessages(msgs => [...msgs, {
            role: 'assistant',
            content: service.connected
              ? `Сервис "${service.name}" отключён от дашборда.`
              : `Отлично! Сервис "${service.name}" подключён к центральному дашборду. Теперь вы будете видеть статистику в реальном времени.`
          }])
        }, 100)
      }
      
      return newServices
    })
  }, [])

  // Create initial nodes
  const createInitialNodes = useCallback((): Node[] => {
    const connectedServices = services.filter(s => s.connected)

    return [
      {
        id: 'central',
        type: 'central',
        position: initialNodePositions.central,
        data: {
          connectedCount: connectedServices.length,
          totalServices: services.length,
          onClick: () => setShowDashboardModal(true),
        },
        draggable: true,
      },
      {
        id: 'stats-panel',
        type: 'statsPanel',
        position: initialNodePositions.stats,
        data: {
          callsConnected: services.find(s => s.id === 'calls')?.connected || false,
          missedConnected: services.find(s => s.id === 'missed')?.connected || false,
          callcenterConnected: services.find(s => s.id === 'callcenter')?.connected || false,
        },
        draggable: false,
      },
      {
        id: 'calls',
        type: 'service',
        position: initialNodePositions.calls,
        data: {
          id: 'calls',
          label: 'Записи разговоров',
          icon: '📞',
          description: 'Речевая аналитика',
          connected: services.find(s => s.id === 'calls')?.connected || false,
          stats: { calls: 1247, analyzed: 1156 },
          onToggle: () => {},
          onSelect: () => { setSelectedService('calls'); setShowSettings(true); },
        },
        draggable: true,
      },
      {
        id: 'missed',
        type: 'service',
        position: initialNodePositions.missed,
        data: {
          id: 'missed',
          label: 'Пропущенные звонки',
          icon: '📱',
          description: 'Отчёт по пропущенным',
          connected: services.find(s => s.id === 'missed')?.connected || false,
          stats: { missed: 47, callback: 38, lost: 9 },
          onToggle: () => {},
          onSelect: () => { setSelectedService('missed'); setShowSettings(true); },
        },
        draggable: true,
      },
      {
        id: 'callcenter',
        type: 'service',
        position: initialNodePositions.callcenter,
        data: {
          id: 'callcenter',
          label: 'Колл-центр',
          icon: '👥',
          description: '10 сотрудников',
          connected: services.find(s => s.id === 'callcenter')?.connected || false,
          stats: { operators: 10, active: 8 },
          onToggle: () => {},
          onSelect: () => { setSelectedService('callcenter'); setShowSettings(true); },
        },
        draggable: true,
      },
    ]
  }, [services])

  // Create edges based on connected services
  const createEdges = useCallback((): Edge[] => {
    const connectedServices = services.filter(s => s.connected)
    
    return connectedServices.map(service => {
      // Determine best handle based on position
      let sourceHandle = 'bottom'
      let targetHandle = 'top'
      
      if (service.id === 'calls') {
        sourceHandle = 'left'
        targetHandle = 'right'
      } else if (service.id === 'missed') {
        sourceHandle = 'right'
        targetHandle = 'left'
      } else if (service.id === 'callcenter') {
        sourceHandle = 'bottom'
        targetHandle = 'top'
      }
      
      return {
        id: `edge-${service.id}`,
        source: 'central',
        target: service.id,
        sourceHandle,
        targetHandle,
        type: 'smoothstep',
        animated: true,
        style: {
          stroke: C.purple,
          strokeWidth: 2,
        },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: C.purple,
        },
      }
    })
  }, [services])

  const [nodes, setNodes, onNodesChange] = useNodesState(createInitialNodes())
  const [edges, setEdges, onEdgesChange] = useEdgesState(createEdges())

  // Update nodes when services change
  useEffect(() => {
    setNodes(prevNodes => prevNodes.map(node => {
      if (node.id === 'central') {
        return {
          ...node,
          data: {
            ...node.data,
            connectedCount: services.filter(s => s.connected).length,
            totalServices: services.length,
          },
        }
      }
      if (node.id === 'stats-panel') {
        return {
          ...node,
          data: {
            callsConnected: services.find(s => s.id === 'calls')?.connected || false,
            missedConnected: services.find(s => s.id === 'missed')?.connected || false,
            callcenterConnected: services.find(s => s.id === 'callcenter')?.connected || false,
          },
        }
      }
      if (['calls', 'missed', 'callcenter'].includes(node.id)) {
        const service = services.find(s => s.id === node.id)
        if (service) {
          return {
            ...node,
            data: {
              ...node.data,
              connected: service.connected,
              stats: service.stats,
            },
          }
        }
      }
      return node
    }))
    
    // Update edges
    setEdges(createEdges())
  }, [services, setNodes, setEdges, createEdges])

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return

    setChatMessages(prev => [...prev, { role: 'user', content: inputMessage }])

    setTimeout(() => {
      let response = 'Я помогу вам с настройкой. Нажмите на сервис для детальной настройки.'

      if (inputMessage.toLowerCase().includes('подключи') || inputMessage.toLowerCase().includes('колл-центр')) {
        const callcenter = services.find(s => s.id === 'callcenter')
        if (callcenter && !callcenter.connected) {
          toggleConnection('callcenter')
          response = 'Колл-центр успешно подключён! Теперь вы видите рейтинг всех 10 операторов.'
        } else if (callcenter?.connected) {
          response = 'Колл-центр уже подключён.'
        }
      }

      if (inputMessage.toLowerCase().includes('отключи')) {
        if (inputMessage.toLowerCase().includes('звонок') || inputMessage.toLowerCase().includes('записи')) {
          toggleConnection('calls')
          response = 'Записи разговоров отключены.'
        } else if (inputMessage.toLowerCase().includes('пропущен')) {
          toggleConnection('missed')
          response = 'Отчёт по пропущенным звонкам отключён.'
        }
      }

      setChatMessages(prev => [...prev, { role: 'assistant', content: response }])
    }, 500)

    setInputMessage('')
  }

  const selectedServiceData = services.find(s => s.id === selectedService)

  return (
    <div style={{
      height: '100vh',
      width: '100%',
      backgroundColor: C.bg,
      color: C.text,
      display: 'flex',
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        * { font-family: 'Inter', sans-serif; }

        .react-flow__node {
          cursor: grab;
        }
        
        .react-flow__node:active {
          cursor: grabbing;
        }

        .react-flow__background {
          background-color: ${C.bg} !important;
        }

        .react-flow__controls {
          background: ${C.bgCard};
          border: 1px solid ${C.border};
          border-radius: 12px;
        }

        .react-flow__controls-button {
          background: ${C.bgCard};
          border-bottom: 1px solid ${C.border};
          color: ${C.text};
        }

        .react-flow__controls-button:hover {
          background: ${C.bgAlt};
        }

        .react-flow__edge-path {
          stroke: ${C.purple};
          stroke-width: 2px;
        }

        .react-flow__edge.animated path {
          stroke-dasharray: 5;
          animation: dash 1s linear infinite;
        }

        @keyframes dash {
          to { stroke-dashoffset: -10; }
        }

        .gradient-text {
          background: linear-gradient(135deg, #8B5CF6, #3B82F6, #06B6D4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .chat-scroll::-webkit-scrollbar {
          width: 4px;
        }
        .chat-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .chat-scroll::-webkit-scrollbar-thumb {
          background: ${C.border};
          border-radius: 2px;
        }

        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }

        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(139, 92, 246, 0.3); }
          50% { box-shadow: 0 0 40px rgba(139, 92, 246, 0.6); }
        }
      `}</style>

      {/* Left Panel - AI Assistant */}
      <aside style={{
        width: 320,
        minWidth: 320,
        backgroundColor: C.bgAlt,
        borderRight: `1px solid ${C.border}`,
        display: 'flex',
        flexDirection: 'column',
        zIndex: 10,
      }}>
        {/* Header */}
        <div style={{
          padding: '16px',
          borderBottom: `1px solid ${C.border}`,
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}>
          <div className="animate-glow" style={{
            width: 40,
            height: 40,
            borderRadius: 12,
            background: C.gradient,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '20px',
          }}>🤖</div>
          <div>
            <div style={{ fontWeight: 700, fontSize: '15px' }}>ИИ-ассистент</div>
            <div style={{ fontSize: '11px', color: C.green }}>● Проактивный режим</div>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="chat-scroll" style={{
          flex: 1,
          overflow: 'auto',
          padding: '14px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}>
          {chatMessages.map((msg, i) => (
            <div key={i} style={{
              alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
              maxWidth: '90%',
            }}>
              <div style={{
                padding: '10px 14px',
                borderRadius: 14,
                backgroundColor: msg.role === 'user' ? C.purple : C.bgCard,
                border: `1px solid ${msg.role === 'user' ? C.purple : C.border}`,
                fontSize: '12px',
                lineHeight: 1.5,
              }}>
                {msg.content}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div style={{ padding: '10px 14px', borderTop: `1px solid ${C.border}` }}>
          <div style={{ fontSize: '10px', color: C.textMuted, marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Быстрые действия
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {!services.find(s => s.id === 'callcenter')?.connected && (
              <button
                onClick={() => toggleConnection('callcenter')}
                style={{
                  padding: '6px 10px',
                  borderRadius: 8,
                  background: C.bgCard,
                  border: `1px solid ${C.orange}`,
                  color: C.orange,
                  fontSize: '10px',
                  cursor: 'pointer',
                }}
              >
                + Колл-центр
              </button>
            )}
            <button
              onClick={() => { setInputMessage('покажи аналитику'); handleSendMessage(); }}
              style={{
                padding: '6px 10px',
                borderRadius: 8,
                background: C.bgCard,
                border: `1px solid ${C.border}`,
                color: C.text,
                fontSize: '10px',
                cursor: 'pointer',
              }}
            >
              📊 Аналитика
            </button>
          </div>
        </div>

        {/* Input */}
        <div style={{ padding: '14px', borderTop: `1px solid ${C.border}` }}>
          <div style={{ display: 'flex', gap: '8px' }}>
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Спросите ИИ..."
              style={{
                flex: 1,
                padding: '10px 14px',
                borderRadius: 10,
                border: `1px solid ${C.border}`,
                background: C.bgCard,
                color: C.text,
                fontSize: '12px',
              }}
            />
            <button
              onClick={handleSendMessage}
              style={{
                padding: '10px 14px',
                borderRadius: 10,
                background: C.gradient,
                border: 'none',
                color: '#fff',
                fontWeight: 600,
                cursor: 'pointer',
                fontSize: '12px',
              }}
            >→</button>
          </div>
        </div>
      </aside>

      {/* React Flow Canvas */}
      <div style={{ flex: 1, position: 'relative' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          nodeTypes={nodeTypes}
          fitView
          fitViewOptions={{ padding: 0.1 }}
          minZoom={0.5}
          maxZoom={1.5}
          connectionLineType={ConnectionLineType.SmoothStep}
          defaultEdgeOptions={{
            type: 'smoothstep',
            animated: true,
          }}
          proOptions={{ hideAttribution: true }}
        >
          <Background variant={BackgroundVariant.Dots} gap={30} size={1} color={C.border} />
          <Controls />
        </ReactFlow>

        {/* Top Header */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          padding: '16px 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: `linear-gradient(180deg, ${C.bg}, transparent)`,
          zIndex: 5,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: 32,
              height: 32,
              borderRadius: 8,
              background: C.gradient,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '14px',
            }}>✨</div>
            <span style={{ fontSize: '16px', fontWeight: 800 }}>
              Контакт<span className="gradient-text">.ИИ</span>
            </span>
          </div>

          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <div style={{
              padding: '6px 14px',
              borderRadius: 16,
              background: C.bgCard,
              border: `1px solid ${C.border}`,
              fontSize: '12px',
            }}>
              🔗 {services.filter(s => s.connected).length} подключено
            </div>
          </div>
        </div>

        {/* Settings Panel */}
        {showSettings && selectedServiceData && (
          <div style={{
            position: 'absolute',
            right: 20,
            top: 70,
            width: 300,
            borderRadius: 16,
            background: C.bgAlt,
            border: `1px solid ${C.border}`,
            display: 'flex',
            flexDirection: 'column',
            zIndex: 20,
            maxHeight: 'calc(100vh - 100px)',
            overflow: 'hidden',
          }}>
            {/* Header */}
            <div style={{
              padding: '16px',
              borderBottom: `1px solid ${C.border}`,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  background: C.gradient,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px',
                }}>
                  {selectedServiceData.icon}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '14px' }}>{selectedServiceData.name}</div>
                  <div style={{ fontSize: '11px', color: C.textMuted }}>{selectedServiceData.description}</div>
                </div>
              </div>
              <button
                onClick={() => setShowSettings(false)}
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 6,
                  background: C.bgCard,
                  border: 'none',
                  color: C.textMuted,
                  cursor: 'pointer',
                  fontSize: '14px',
                }}
              >✕</button>
            </div>

            {/* Stats */}
            <div style={{ padding: '14px', borderBottom: `1px solid ${C.border}` }}>
              <div style={{ fontSize: '10px', color: C.textMuted, marginBottom: '10px', textTransform: 'uppercase' }}>
                Статистика
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                {Object.entries(selectedServiceData.stats).map(([key, value]) => (
                  <div key={key} style={{
                    padding: '10px 8px',
                    borderRadius: 10,
                    background: C.bgCard,
                    textAlign: 'center',
                  }}>
                    <div style={{ fontSize: '16px', fontWeight: 800 }}>
                      {typeof value === 'number' ? value.toLocaleString() : value}
                    </div>
                    <div style={{ fontSize: '9px', color: C.textMuted, marginTop: '2px' }}>{key}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div style={{ padding: '14px' }}>
              <button
                onClick={() => {
                  toggleConnection(selectedServiceData.id)
                  setShowSettings(false)
                }}
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: 10,
                  background: selectedServiceData.connected ? C.red : C.green,
                  border: 'none',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: '13px',
                  cursor: 'pointer',
                }}
              >
                {selectedServiceData.connected ? 'Отключить сервис' : 'Подключить сервис'}
              </button>
            </div>
          </div>
        )}

        {/* Recommendations */}
        <div style={{
          position: 'absolute',
          bottom: 20,
          left: 20,
          right: showSettings ? 340 : 20,
          padding: '14px',
          borderRadius: 12,
          background: C.bgCard,
          border: `1px solid ${C.border}`,
          zIndex: 5,
          overflow: 'visible',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
            <span style={{ fontSize: '16px' }}>💡</span>
            <span style={{ fontWeight: 600, color: C.purple, fontSize: '13px' }}>Рекомендации ИИ</span>
          </div>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', overflow: 'visible' }}>
            {!services.find(s => s.id === 'callcenter')?.connected && (
              <div style={{
                padding: '10px 14px',
                borderRadius: 10,
                background: 'rgba(245, 158, 11, 0.1)',
                border: `1px solid ${C.orange}30`,
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                flexShrink: 0,
                flexWrap: 'wrap',
              }}>
                <span style={{ color: C.orange }}>👥</span>
                <span style={{ fontSize: '11px', whiteSpace: 'nowrap' }}>Подключите Колл-центр</span>
                <button onClick={() => toggleConnection('callcenter')} style={{
                  padding: '4px 10px',
                  borderRadius: 6,
                  background: C.orange,
                  border: 'none',
                  color: '#000',
                  fontWeight: 600,
                  fontSize: '10px',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                }}>Подключить</button>
              </div>
            )}
            <div style={{
              padding: '10px 14px',
              borderRadius: 10,
              background: 'rgba(16, 185, 129, 0.1)',
              border: `1px solid ${C.green}30`,
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              flexShrink: 0,
            }}>
              <span style={{ color: C.green }}>📈</span>
              <span style={{ fontSize: '11px', whiteSpace: 'nowrap' }}>+15% конверсии с речевой аналитикой</span>
            </div>
          </div>
        </div>

        {/* Dashboard Modal */}
        {showDashboardModal && (
          <div
            onClick={() => setShowDashboardModal(false)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1000,
              backdropFilter: 'blur(8px)',
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                width: '90%',
                maxWidth: 800,
                maxHeight: '90vh',
                borderRadius: 20,
                background: C.bgAlt,
                border: `1px solid ${C.border}`,
                overflow: 'auto',
                boxShadow: `0 0 80px rgba(139, 92, 246, 0.3)`,
              }}
            >
              {/* Modal Header */}
              <div style={{
                padding: '20px 24px',
                borderBottom: `1px solid ${C.border}`,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                position: 'sticky',
                top: 0,
                background: C.bgAlt,
                zIndex: 10,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    background: C.gradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px',
                  }}>🚦</div>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: '18px' }}>Центральный дашборд</div>
                    <div style={{ fontSize: '12px', color: C.textMuted }}>Светофор метрик и аналитика</div>
                  </div>
                </div>
                <button
                  onClick={() => setShowDashboardModal(false)}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    background: C.bgCard,
                    border: `1px solid ${C.border}`,
                    color: C.textMuted,
                    cursor: 'pointer',
                    fontSize: '18px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >✕</button>
              </div>

              {/* Modal Content */}
              <div style={{ padding: '24px' }}>
                {/* Traffic Light Status */}
                <div style={{
                  marginBottom: '24px',
                  padding: '20px',
                  borderRadius: 16,
                  background: C.bgCard,
                  border: `1px solid ${C.border}`,
                }}>
                  <div style={{ fontSize: '14px', fontWeight: 700, marginBottom: '16px', color: C.purple }}>
                    🚦 Текущий статус светофора
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '16px' }}>
                    <div style={{
                      width: 60,
                      height: 60,
                      borderRadius: '50%',
                      background: C.green,
                      boxShadow: `0 0 30px rgba(16, 185, 129, 0.5)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '24px',
                    }}>✓</div>
                    <div>
                      <div style={{ fontSize: '20px', fontWeight: 800, color: C.green }}>Зелёный — Всё хорошо</div>
                      <div style={{ fontSize: '13px', color: C.textMuted }}>Выручка растёт, метрики в норме</div>
                    </div>
                  </div>
                  <div style={{
                    padding: '12px 16px',
                    borderRadius: 10,
                    background: 'rgba(16, 185, 129, 0.1)',
                    fontSize: '12px',
                    lineHeight: 1.6,
                  }}>
                    <strong>Как это определяется:</strong> ИИ анализирует все подключённые сервисы и вычисляет общее состояние на основе конверсии, количества пропущенных звонков, рейтингов операторов и других метрик.
                  </div>
                </div>

                {/* Data Sources */}
                <div style={{
                  marginBottom: '24px',
                  padding: '20px',
                  borderRadius: 16,
                  background: C.bgCard,
                  border: `1px solid ${C.border}`,
                }}>
                  <div style={{ fontSize: '14px', fontWeight: 700, marginBottom: '16px', color: C.purple }}>
                    📊 Источники данных
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {services.map(service => (
                      <div key={service.id} style={{
                        padding: '14px',
                        borderRadius: 12,
                        background: service.connected ? 'rgba(139, 92, 246, 0.1)' : C.bgAlt,
                        border: `1px solid ${service.connected ? C.purple : C.border}`,
                        opacity: service.connected ? 1 : 0.5,
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span style={{ fontSize: '20px' }}>{service.icon}</span>
                            <div>
                              <div style={{ fontWeight: 600, fontSize: '13px' }}>{service.name}</div>
                              <div style={{ fontSize: '11px', color: C.textMuted }}>{service.description}</div>
                            </div>
                          </div>
                          <div style={{
                            padding: '4px 10px',
                            borderRadius: 20,
                            background: service.connected ? C.green : C.textMuted,
                            color: '#fff',
                            fontSize: '10px',
                            fontWeight: 600,
                          }}>
                            {service.connected ? 'Активен' : 'Не активен'}
                          </div>
                        </div>
                        {service.connected && (
                          <div style={{ marginTop: '10px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                            {Object.entries(service.stats).slice(0, 4).map(([key, value]) => (
                              <div key={key} style={{
                                padding: '6px 10px',
                                borderRadius: 8,
                                background: C.bgAlt,
                                fontSize: '11px',
                              }}>
                                <span style={{ color: C.textMuted }}>{key}:</span>{' '}
                                <span style={{ fontWeight: 600 }}>{typeof value === 'number' ? value.toLocaleString() : value}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* How Calculated */}
                <div style={{
                  marginBottom: '24px',
                  padding: '20px',
                  borderRadius: 16,
                  background: C.bgCard,
                  border: `1px solid ${C.border}`,
                }}>
                  <div style={{ fontSize: '14px', fontWeight: 700, marginBottom: '16px', color: C.purple }}>
                    🧮 Как рассчитываются показатели
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '13px', marginBottom: '6px', color: C.green }}>
                        📈 Рост выручки (+18%)
                      </div>
                      <div style={{ fontSize: '12px', color: C.textMuted, lineHeight: 1.6 }}>
                        <strong>Формула:</strong> (Выручка за период − Выручка прошлого периода) / Выручка прошлого периода × 100%<br/>
                        <strong>Источники:</strong> Записи разговоров → анализ закрытых сделок → CRM<br/>
                        <strong>Влияние:</strong> Чем выше показатель, тем эффективнее работа операторов и качество обработки звонков
                      </div>
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '13px', marginBottom: '6px', color: C.orange }}>
                        📱 Пропущенные звонки (−51%)
                      </div>
                      <div style={{ fontSize: '12px', color: C.textMuted, lineHeight: 1.6 }}>
                        <strong>Формула:</strong> (Пропущенные сегодня − Пропущенные вчера) / Пропущенные вчера × 100%<br/>
                        <strong>Источники:</strong> Телефония → логи звонков → автоматический перезвон<br/>
                        <strong>Влияние:</strong> Каждый пропущенный звонок = потенциально потерянный клиент. Уменьшение = рост конверсии
                      </div>
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '13px', marginBottom: '6px', color: C.purple }}>
                        🎯 Конверсия (12%↑)
                      </div>
                      <div style={{ fontSize: '12px', color: C.textMuted, lineHeight: 1.6 }}>
                        <strong>Формула:</strong> Количество продаж / Количество входящих контактов × 100%<br/>
                        <strong>Источники:</strong> Речевая аналитика → определение намерений → CRM<br/>
                        <strong>Влияние:</strong> Показывает эффективность обработки обращений операторами
                      </div>
                    </div>
                  </div>
                </div>

                {/* Impact Actions */}
                <div style={{
                  padding: '20px',
                  borderRadius: 16,
                  background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.1))',
                  border: `1px solid ${C.purple}40`,
                }}>
                  <div style={{ fontSize: '14px', fontWeight: 700, marginBottom: '16px', color: C.purple }}>
                    ⚡ На что влияют эти данные
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
                    <div style={{ padding: '12px', borderRadius: 10, background: C.bgCard }}>
                      <div style={{ fontSize: '16px', marginBottom: '6px' }}>👔</div>
                      <div style={{ fontWeight: 600, fontSize: '12px', marginBottom: '4px' }}>Руководитель</div>
                      <div style={{ fontSize: '11px', color: C.textMuted }}>Принимает решения о премиях, обучении, расширении штата</div>
                    </div>
                    <div style={{ padding: '12px', borderRadius: 10, background: C.bgCard }}>
                      <div style={{ fontSize: '16px', marginBottom: '6px' }}>⚙️</div>
                      <div style={{ fontWeight: 600, fontSize: '12px', marginBottom: '4px' }}>Администратор</div>
                      <div style={{ fontSize: '11px', color: C.textMuted }}>Настраивает алерты, распределяет нагрузку операторов</div>
                    </div>
                    <div style={{ padding: '12px', borderRadius: 10, background: C.bgCard }}>
                      <div style={{ fontSize: '16px', marginBottom: '6px' }}>🎧</div>
                      <div style={{ fontWeight: 600, fontSize: '12px', marginBottom: '4px' }}>Оператор</div>
                      <div style={{ fontSize: '11px', color: C.textMuted }}>Видит свой рейтинг и области для улучшения</div>
                    </div>
                    <div style={{ padding: '12px', borderRadius: 10, background: C.bgCard }}>
                      <div style={{ fontSize: '16px', marginBottom: '6px' }}>💰</div>
                      <div style={{ fontWeight: 600, fontSize: '12px', marginBottom: '4px' }}>Бизнес</div>
                      <div style={{ fontSize: '11px', color: C.textMuted }}>Рост выручки до 340% за 3 месяца</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
