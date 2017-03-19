/**
 * Created by ivan on 19.03.17.
 */
import React, {PropTypes, Component} from 'react'

export default class Page extends Component {
    onYearBtnClick(e) {
       this.props.getPhotos(+e.target.textContent)
    }
    render() {
        const { year, photos, fetching } = this.props
        return <div>
            <p>
                <button onClick={::this.onYearBtnClick}>2016</button>
                <button onClick={::this.onYearBtnClick}>2015</button>
                <button onClick={::this.onYearBtnClick}>2014</button>
            </p>
            <h3>{year}</h3>
            {
                fetching ?
                    <p>Загрузка</p>
                    :
                    <p>{photos.length} фото</p>

            }
        </div>
    }
}

Page.PropTypes = {
    year: PropTypes.number.isRequired,
    photos: PropTypes.array.isRequired,
    getPhotos: PropTypes.func.isRequired
}
