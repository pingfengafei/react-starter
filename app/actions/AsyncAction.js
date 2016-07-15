/**
 * Created by zad on 16/7/15.
 */
export const AUTHORIZE = 'AUTHORIZE';
export const AUTHORIZE_SUCCESS = 'AUTHORIZE_SUCCESS';
export const AUTHORIZE_FAIL = 'AUTHORIZE_FAIL';

let CounterAction = {
    authorize(username, password){
        return function (dispatch) {
            dispatch({
                type: 'AUTHORIZE',
                username,
                password
            });

            $.ajax({
                url: 'http://maxcd01-dev06.chinacloudapp.cn:8888/usercenter/authorize',
                method: 'POST',
                data: JSON.stringify({
                    username: username,
                    password: password
                }),
                dataType: 'json',
                contentType: 'application/json',
                crossDomain: true
            }).then(
                response => dispatch({
                    type: 'AUTHORIZE_SUCCESS',
                    response
                }),
                error => dispatch({
                    type: 'AUTHORIZE_FAIL',
                    error
                })
            );
        };
    }
};

export default CounterAction;