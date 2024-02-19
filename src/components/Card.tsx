import { PropsWithChildren } from "react"

type CardProps = {
  padding: 'p-2' | 'p-4' | 'p-12'
}

function Card(props: PropsWithChildren<CardProps>) {
  return (
    <>
      <div className={`max-w-sm rounded-lg overflow-hidden shadow-2xl ${props.padding} focus:ring-purple-500 focus:border-purple-500 border-purple-700 bg-white`}>
        {props.children}  
      </div>
    </>
  )
}

export default Card
