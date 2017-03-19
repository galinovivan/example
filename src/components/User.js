/**
 * Created by ivan on 19.03.17.
 */
import React, {PropTypes, Component} from 'react'

export default class User extends Component {

    render() {
        const { name, error } = this.props

        let template

        if (name) {
            template = <p>Привет {name}!</p>
        } else {


            template = <button className="btn" onClick={this.props.handleLogin}>Войти</button>

        }

        return <div className="ib user">
            {template}
            {error ? <p className="error">{error}. <br /> Попробовайье еще раз. </p> : '' }
        </div>
    }

}

User.propTypes = {
    name: PropTypes.string.isRequired,
    handleLogon: PropTypes.func.isRequired,
    error: PropTypes.string.isRequired
}
