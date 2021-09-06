import styles from './index.module.less'

const Grid: React.FC = (props) => {
  const style = Object.assign({}, {
    '--vertical-gap': '8px',
    '--horizontal-gap': '8px',
    '--columns': 3

  })
  return <div className={styles.grid} style={style}>
    {props.children}
  </div>
}

const Index = () => {
  const data = [...new Array(10).keys()]
  return (
    <div className='index'>
      <div>Hello world!</div>
      <Grid>
        {data.map(item => <div key={item} className={styles['grid-item']}>{item}</div>)}
      </Grid>
    </div >
  )
}

export default Index