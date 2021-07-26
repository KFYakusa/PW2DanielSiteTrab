import { Alert, Button } from "react-bootstrap"

const CustomAlert = ({deletar, titulo,text,showControls, ...props}) => {

    return (
        <Alert {...props}>
            <Alert.Heading>{titulo}</Alert.Heading>
            <p>{text? text:" any message here" } </p>
            <hr/>
            {/* <div className="d-flex justify-content-end">
                <Button onClick={() => showControl(false)} variant="outline-danger">
                    Eu sei sim
                </Button>
            </div> */}

        </Alert>
    )
}

export default CustomAlert