import { PropsWithChildren } from "react"

type CardProps = {
  heading: string;
  body: string;
}

function Card(props: PropsWithChildren<CardProps>) {
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          <h2 className="text-3xl font-bold mb-2">
            {props.heading}
          </h2>
          <p className="text-gray-700 text-base">
            {props.body}
          </p>
        </div>
        {props.children}
      </div>
    </>
  )
}

export default Card
