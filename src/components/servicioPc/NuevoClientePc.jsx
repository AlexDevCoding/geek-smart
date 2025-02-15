import { PlusCircleFilled,QuestionCircleOutlined,PlusOutlined } from '@ant-design/icons';

import React, { useState } from 'react';
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space ,FloatButton} from 'antd';

const { Option } = Select;






export const NuevoClientePc = () =>  {
  const [open, setOpen] = useState(false);
  const showDrawer = () => { setOpen(true); };
  const onClose = () => { setOpen(false);};

  return (

  < >
    
  
      <FloatButton />
      <FloatButton icon={<PlusCircleFilled />} onClick={showDrawer} tooltip={<div>Agregar cliente</div>} />

    
      <Drawer
        title="Agregar cliente"
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
                name="nombrecliente"
                label="Nombre completo del cliente:"
                rules={[
                  {
                    required: true,
                    message: 'Por favor ingrese el nombre del cliente',
                  },
                ]}
              >
                <Input placeholder="Nombre del cliente" />
              </Form.Item>
            </Col>
            <Col span={12}>
             <Form.Item
                name="Tipodeservicio"
                label="Tipo de servicio:"
                rules={[
                  {
                    required: true,
                    message: 'Por favor ingrese el tipo de servicio',
                  },
                ]}
              >
                <Input placeholder="Tipo de servicio" />
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
                name="marcapc"
                label="Marca de la pc"
                rules={[
                  {
                    required: true,
                    message: 'Por favor ingrese la marca de la pc',
                  },
                ]}
              >
                <Input placeholder="Marca de la pc" />
              </Form.Item>
            </Col>
            <Col span={12}>
            <Form.Item
                name="numerocliente"
                label="Numero de telefono:"
                rules={[
                  {
                    required: true,
                    message: 'Por favor ingresar el numero de cliente',
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

            <Col span={12}>
            <Form.Item
                name="preciotelefono"
                label="Precio del servicio:"
                rules={[
                  
                ]}
              >
                <Input
                  style={{
                    width: '100%',
                  }}
                  
                 
                  placeholder="Precio del servicio"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="description"
                label="Descricion"
                rules={[
                  {
                    required: true,
                    message: 'Direccion del telefono',
                  },
                ]}
              >
                <Input.TextArea rows={4} placeholder="por favor ingresar la descripcion" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>

      

  </>
  
)
}
