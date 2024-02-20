import { PropsWithChildren } from "react"

type IconProps = {
  fill: string;
  width: string;
  height: string;
  name: string;
  path: string;
}

function Icon(props: IconProps) {

  const svgStyle = {
    aspectRatio: '1/1',
    width: '50%',
    height: '50%'
  };

  return (
    <svg aria-hidden="true" {...props} style={svgStyle}>
      <path d={props.path}></path>
    </svg>
  )
}

export default Icon;

