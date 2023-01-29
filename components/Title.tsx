type Props = {
  children: React.ReactNode
}

const Title: React.FC<Props> = ({ children }) => {
  return <h1 className="text-2xl pb-4">{children}</h1>
}

export default Title
