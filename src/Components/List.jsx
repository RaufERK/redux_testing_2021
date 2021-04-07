import { useSelector, useDispatch } from 'react-redux';
import { useRef, useState } from 'react';
import { Button, Table, Form, Row, Col } from 'react-bootstrap';
const List = () => {
  const list = useSelector((store) => store.list);
  const dispatch = useDispatch();
  const inputValue = useRef();

  const addItem = () => {
    let payload = inputValue.current.value;
    dispatch({ type: 'ADD_ITEM', payload });
    inputValue.current.value = '';
  };

  const deleteItem = (id) => {
    dispatch({ type: 'DELETE', payload: id });
  };

  const [active, setActive] = useState(null);
  const [label2, setLabel] = useState(null);

  const setItem = (id) => {
    dispatch({ type: 'EDIT', payload: { id, label: label2 } });
    setActive(null);
  };

  const setActiveItem = (id, label) => {
    setActive(id);
    setLabel(label);
  };

  return (
    <div className="main">
      <h3>List</h3>
      <Table striped size="sm">
        {list.map(({ id, label }) => (
          <tr key={id}>
            <td>
              {active === id ? (
                <Form.Control
                  onChange={({ target }) => setLabel(target.value)}
                  value={label2}
                />
              ) : (
                label
              )}
            </td>
            <td>
              {active === id ? (
                <Button onClick={() => setItem(id)} variant="success">
                  SET
                </Button>
              ) : (
                <Button
                  onClick={() => setActiveItem(id, label)}
                  variant="success"
                >
                  EDIT
                </Button>
              )}
            </td>
            <td>
              <Button onClick={() => deleteItem(id)} variant="danger">
                DELETE
              </Button>
            </td>
          </tr>
        ))}
      </Table>
      <Row>
        <Col>
          <Form.Control ref={inputValue} />
        </Col>
        <Col>
          <Button onClick={addItem}>ADD ITEM</Button>
        </Col>
      </Row>
    </div>
  );
};

export default List;
