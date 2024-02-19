import { PropsWithChildren } from "react"

type CardProps = {
}

function Card(props: PropsWithChildren<CardProps>) {
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        {props.children}  
      </div>
    </>
  )
}

export default Card
