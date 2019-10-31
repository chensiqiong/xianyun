import {
  Message
} from 'element-ui';

export default function ({
  $axios,
  redirect
}) {

  $axios.onError(error => {
    let {
      statusCode,
      message
    } = error.response.data
    if (statusCode === 400) {
      Message.warning(message)
    }
  })
}
