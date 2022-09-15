import Reminder from './models/Reminder'

interface Props {
  people: Reminder[]
}
const List: React.FC<Props> = ({ people }) => {
  return (
    <div className='flex flex-col items-start space-y-6'>
      {people.map((item) => {
        return (
          <div key={item.id} className='flex space-x-3'>
            {/* Left */}
            <img
              src={item.image}
              //   src='https://robohash.org/irfan'
              alt={item.name}
              className='w-24 h-24 rounded-full object-cover'
            />
            {/* Right */}
            <div className='flex flex-col space-y-3'>
              <h1 className='font-semibold'>{item.name}</h1>
              <p className='text-slate-600'>{item.age} years</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default List
