import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function FormFloatingTextareaExample() {
    return (
        <>
            <FloatingLabel
                controlId="floatingTextarea"
                label="E-mail"
                className="mb-3"
                style={{width: '600px'}}
            >
                <Form.Control as="textarea" placeholder="Leave a comment here" style={{width: '600px', resize: 'none', border: '1px solid green',}}/>
            </FloatingLabel>
            <FloatingLabel controlId="floatingTextarea2" label="Treść wiadomości...">
                <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: '100px', width: '600px', resize: 'none',border: '1px solid green' }}
                />
            </FloatingLabel>
        </>
    );
}

export default FormFloatingTextareaExample;