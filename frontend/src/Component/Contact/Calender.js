import React from 'react'
import './calender.css'

const Calender = () => {
  return (
    <div className="calender">
    <div className="month">
        <strong>OCTOBER</strong>
        <strong>2020</strong>
    </div>
    <table>
        <tr>
            <th className="th">Sun</th>
            <th className="th">Mon</th>
            <th className="th">The</th>
            <th className="th">Wed</th>
            <th className="th">Thu</th>
            <th className="th">Fri</th>
            <th className="th">Sat</th>
        </tr>
        <tr>
            <td className='td'></td>
            <td className='td'></td>
            <td className='td'>1</td>
            <td className='td'>2</td>
            <td className='td'>3</td>
            <td className='td'>4</td>
            <td className='td'>5</td>
        </tr>
        <tr>
            <td className='td'>6</td>
            <td className='td'>7</td>
            <td className='td'>8</td>
            <td className='td'>9</td>
            <td className='td'>10</td>
            <td className='td'>11</td>
            <td className='td'>12</td>
        </tr>
        <tr>
            <td className='td'>13</td>
            <td className='td'>14</td>
            <td className='td'>15</td>
            <td className='td'>16</td>
            <td className='td'>17</td>
            <td className='td'>18</td>
            <td className='td'>19</td>
        </tr>
        <tr>
            <td className='td'>20</td>
            <td className='td'>21</td>
            <td className='td'>22</td>
            <td className='td'>23</td>
            <td className='td'>24</td>
            <td className='td'>25</td>
            <td className='td'>26</td>
        </tr>
        <tr>
            <td className='td'>27</td>
            <td className='td'>28</td>
            <td className='td'>29</td>
            <td className='td'>30</td>
            <td className='td'>31</td>
            <td className='td'></td>
            <td className='td'></td>
        </tr>
    </table>
</div>

  )
}

export default Calender




