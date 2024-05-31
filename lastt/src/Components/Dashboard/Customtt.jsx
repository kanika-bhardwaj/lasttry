// const CustomTooltip = ({ active, payload, label }) => {
//     if (active && payload && payload.length) {
//       return (
//         <div className="tooltip">
//          <p className="tooltipLabel">{`$${payload[0].payload?.price}`}</p>
//          <p className="tooltipDesc">{`${payload[0]?.payload?.date}`}</p>
//         </div>
//       )
//      }
  
//     return null
//   }
  
//   CustomTooltip.propTypes = {
//     type: PropTypes.string,
//     payload: PropTypes.array,
//     label: PropTypes.string,
//   }
  
//   export default CustomTooltip