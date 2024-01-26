import './my-label.css'
/**allCaps is a boolean that defaults to false
 *  ! todas las propiedades son opcionales
 * color is a string text-primary | text-secondary | text-tertiary
 * fontColor con un selecto de color
*/ 
interface Props {
  /**
   * Label to display
   */
  label: string
  /**
   * Size of the label
   */
  size?: 'normal' | 'h1' | 'h2' | 'h3'
  /**
   * True if the label should be all caps
   */
  allCaps?: boolean
  /**
   * Color of the label text
   */
  color?: 'text-primary' | 'text-secondary' | 'text-tertiary'
  /**
   * Choose the color of the label text!
   */
  fontColor?: string
  /**
   * Choose the color of the label !
   */
  backgroundColor?: string

}
export const MyLabel = ({
  label,
  size='normal',
  allCaps=false,
  color='text-primary',
  fontColor=undefined,
  backgroundColor='transparent'
}: Props) => {
  return (
    <span className ={`label ${size} ${allCaps ? 'all-caps' : ''} ${color}`} style={{color: fontColor, backgroundColor}}>{label}</span>
  )
}
