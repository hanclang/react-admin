import React from 'react'
import style from './SalesRank.scss'

const SalesRank: React.FC = () => {
  return (
    <div className={style.salesRank}>
      <h4 className={style.rankingTitle}>门店销售额排名</h4>
      <ul className={style.rankingList}>
        {Array(7)
          .fill(0)
          .map((item, index: number) => (
            <li>
              <span className={[style.rankingItemNumber, index + 1 <= 3 ? style.active : ''].join(' ')}>{index + 1}</span>
              <span className={style.rankingItemTitle}>工专路 {index + 1} 号店</span>
              <span>323,234</span>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default SalesRank
