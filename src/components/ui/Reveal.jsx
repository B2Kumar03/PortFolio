import { useReveal } from '../../hooks/useReveal'

export function Reveal({ as: Comp = 'div', className = '', children, ...props }) {
  const ref = useReveal()

  return (
    <Comp ref={ref} className={`reveal ${className}`.trim()} {...props}>
      {children}
    </Comp>
  )
}
