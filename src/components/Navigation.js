import useStore from '../contexts/Store/hooks/useStore'

const Navigation = () => {
  const { setCurrentList } = useStore()
  const navPlaces = [
    {
      title: 'Сегодня',
      icon: '📆',
      amount: '2',
      url: 'all'
    },
    {
      title: 'Запланировано',
      icon: '📆',
      amount: '2',
      url: 'all'
    },
    {
      title: 'Все',
      icon: '☁',
      amount: '0',
      url: 'all'
    },
    {
      title: 'С флажком',
      icon: '🏴',
      amount: '3',
      url: 'flag'
    }
  ]
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap'
      }}
    >
      {navPlaces.map((item) => {
        return (
          <a
            className="card"
            style={{
              width: '45%',
              marginBottom: '10px',
              transform: 'scale(0.93)'
            }}
            onClick={() => {
              setCurrentList({id: item.url})
            }}
          >
            <div
              className="fz-title-1"
              style={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <div>{item.icon}</div>
              <div>{item.amount}</div>
            </div>
            <p>{item.title}</p>
          </a>
        )
      })}
    </div>
  )
}
export default Navigation
