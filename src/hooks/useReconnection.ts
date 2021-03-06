import { toast } from 'react-toastify'
import socket from '../socket-io'
import useTranslations from '../hooks/useTranslations'

const translations = useTranslations()

type ReconnectionStatus = 'error' | 'success' | 'already-in-room' | 'no-room'
type GameState =
  | 'WAITING_FOR_PLAYERS'
  | 'IN_PROGRESS'
  | 'WAITING_FOR_HOST'
  | 'POSITION_SCREEN'

const checkConnection = (
  room: string,
  name: string,
  id: string,
  state: GameState
) => {
  socket.emit('check-room-connection', {
    room: room,
    name: name,
    id: id,
    state: state,
  })
}

const handleReconnection = (data: any) => {
  const status: ReconnectionStatus = data.status

  if (status === 'success') {
    toast.info(translations.alerts.reconnected)
  }
}

export const useReconnection = () => {
  return [checkConnection, handleReconnection]
}
