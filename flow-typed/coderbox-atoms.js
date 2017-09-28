
declare module '@coderbox/atoms' {
  declare var Box: React$ComponentType<*>
  declare var Button: React$ComponentType<*>
  declare var Icon: React$ComponentType<*>
  declare var Link: React$ComponentType<*>
  declare var Stack: React$ComponentType<*>
  declare var Subtitle: React$ComponentType<*>
  declare var Text: React$ComponentType<*>
  declare var Title: React$ComponentType<*>
  declare var Tag: React$ComponentType<*>
  declare var Group: React$ComponentType<*>
  declare var YesNo: React$ComponentType<*>

  declare type Colors = 'primary' | 'success' | 'danger' | 'white' | 'black' | 'gray'
  declare var theme : any
}
