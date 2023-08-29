function IconSwitch({onSwitch, icon}) {
  return (
    <div className='toolbar'>
      <span className="material-icons switch-view" onClick={onSwitch}>
      {icon}
    </span>
    </div>
  )
}

export default IconSwitch;