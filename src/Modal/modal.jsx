/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { Modal, Button } from 'antd';
 

function modal  () {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };
    return (
        <>
        <Button type="primary" onClick={showModal}>
                  Open Modal
      </Button>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
    
      </Modal>
    </>
        
    );
};

export default modal;