import { PlusCircleFilled,QuestionCircleOutlined,PlusOutlined } from '@ant-design/icons';

import React, { useState } from 'react';
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space ,FloatButton} from 'antd';

const { Option } = Select;






export const Flobott = () =>  {
  const [open, setOpen] = useState(false);
  const showDrawer = () => { setOpen(true); };
  const onClose = () => { setOpen(false);};

  return (

  < >
    
  
      <FloatButton />
      <FloatButton icon={<PlusCircleFilled />} onClick={showDrawer} tooltip={<div>Agregar provedor</div>} />

    
      <Drawer
        title="Agregar provedor"
        width={720}
        onClose={onClose}
        open={open}
        styles={{
          body: {
            paddingBottom: 80,
          },
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancelar</Button>
            <Button onClick={onClose} type="primary">
              Agregar
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="name"
                label="Provedor"
                rules={[
                  {
                    required: true,
                    message: 'Por favor ingrese el nombre del proveedor',
                  },
                ]}
              >
                <Input placeholder="Nombre del proveedor" />
              </Form.Item>
            </Col>
            <Col span={12}>
            <Form.Item
                name="owner"
                label="Categoria del provedor"
                rules={[
                  {
                    required: true,
                    message: 'Por favor Seleccione la categoria del provedor',
                  },
                ]}
              >
                <Select placeholder="Seleccione la categoria">
                  <Option value="Telefonos">Telefonos</Option>
                  <Option value="Pc">Pc</Option>
                  <Option value="varios">varios</Option>

                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              
            </Col>
            <Col span={12}>
              
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="approver"
                label="Calidad del provedor"
                rules={[
                  {
                    required: true,
                    message: 'calidad del provedor',
                  },
                ]}
              >
                <Select placeholder="Seleccione la calidad del provedor">
                  <Option value="buena">Buena</Option>
                  <Option value="regular">Regular</Option>
                 

                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
            <Form.Item
                name="url"
                label="Numero de telefono"
                rules={[
                  {
                    required: true,
                    message: 'Por favor ingresar numero de telefono del proveedor',
                  },
                ]}
              >
                <Input
                  style={{
                    width: '100%',
                  }}
                  addonBefore="+54"
                 
                  placeholder=" Ingresar numero de telefono"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="description"
                label="Direccion"
                rules={[
                  {
                    required: true,
                    message: 'Direccion del provedor',
                  },
                ]}
              >
                <Input.TextArea rows={4} placeholder="por favor ingresar la direccion" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>

      

  </>
  
)
}
