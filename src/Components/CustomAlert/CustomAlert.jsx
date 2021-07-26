import { Alert } from "react-bootstrap"

const CustomAlert = ({deletar, titulo,text,showControls, ...props}) => {

    return (
        <Alert {...props}>
            <Alert.Heading>{titulo}</Alert.Heading>
            <p>{text? text:" any message here" } </p>

        </Alert>
    )
}

export default CustomAlert