function openCode() {
    const { createRoot } = ReactDOM;
    const { Collapse, Space } = antd;
    const { Panel } = Collapse;
    const text = `
      A dog is a type of domesticated animal.
      Known for its loyalty and faithfulness,
      it can be found: a welcome guest in many households across the world.
    `;
    const App = () => (
      <Space direction="vertical">
        <Collapse collapsible="header" defaultActiveKey={['1']}>
          <Panel header="This panel can only be collapsed by clicking text" key="1">
            <p>{text}</p>
          </Panel>
        </Collapse>
        <Collapse collapsible="icon" defaultActiveKey={['1']}>
          <Panel header="This panel can only be collapsed by clicking icon" key="1">
            <p>{text}</p>
          </Panel>
        </Collapse>
      </Space>
    );
    const ComponentDemo = App;
  
    const mountNode = document.createElement('div');
    document.body.appendChild(mountNode);
    createRoot(mountNode).render(<ComponentDemo />);
  }
  
  function addButtonClickListener() {
    const button = document.querySelector('.check-agreement');
    if (button) {
      button.addEventListener('click', openCode);
    }
  }
  
  // Wait for the DOM to load before adding the button click listener
  document.addEventListener('DOMContentLoaded', addButtonClickListener);
  