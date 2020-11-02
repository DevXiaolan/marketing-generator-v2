import { Button, Col, Form, Input, Row } from 'antd';
import { InputProps } from 'antd/lib/input';
import React, { useState } from 'react';
import { Typography } from 'antd';
import styles from './index.less';

const { Paragraph } = Typography;

interface IMeta {
  who: string;
  doSth: string;
  whatis: string;
}

const DEFAULT_META: IMeta = {
  who: '张三',
  doSth: '打李四',
  whatis: '痛击的李四',
};

const InputProp: InputProps = {
  maxLength: 8,
  size: 'large',
  style: {
    maxWidth: '200px',
  },
};

const Layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const plainText = ({ who, doSth, whatis }: IMeta = DEFAULT_META): string => {
  return `${who}${doSth}是怎么回事呢？${who}相信大家都很熟悉，但是${who}${doSth}是怎么回事呢，下面就让小编带大家一起了解吧。

  ${who}${doSth}，其实就是${whatis}，大家可能会很惊讶${who}怎么会${doSth}呢？但事实就是这样，小编也感到非常惊讶。
  
  这就是关于${who}${doSth}的事情了，大家有什么想法呢，欢迎在评论区告诉小编一起讨论哦！`;
};

const gen = ({ who, doSth, whatis }: IMeta = DEFAULT_META) => {
  return (
    <Paragraph
      copyable={{
        text: plainText({ who, doSth, whatis }),
      }}
    >
      <p>
        <strong>{who}</strong>
        <strong>{doSth}</strong>是怎么回事呢？<strong>{who}</strong>
        相信大家都很熟悉，但是<strong>{who}</strong>
        <strong>{doSth}</strong>是怎么回事呢，下面就让小编带大家一起了解吧。
      </p>
      <p>
        <strong>{who}</strong>
        <strong>{doSth}</strong>，其实就是<strong>{whatis}</strong>
        ，大家可能会很惊讶<strong>{who}</strong>怎么会<strong>{doSth}</strong>
        呢？但事实就是这样，小编也感到非常惊讶。
      </p>
      <p>
        这就是关于<strong>{who}</strong>
        <strong>{doSth}</strong>
        的事情了，大家有什么想法呢，欢迎在评论区告诉小编一起讨论哦！
      </p>
    </Paragraph>
  );
};

export default () => {
  const [result, setResult] = useState(gen());

  return (
    <Row className={styles.mgRow}>
      <Col xs={24} sm={24} md={12} className={styles.mgCol}>
        <Form
          initialValues={DEFAULT_META}
          onFinish={(values: IMeta) => {
            setResult(gen(values));
          }}
          onFinishFailed={err => {
            console.log(err);
          }}
        >
          <Form.Item
            {...Layout}
            label="什么人"
            name="who"
            rules={[{ required: true, message: '必填啊' }]}
          >
            <Input {...InputProp} />
          </Form.Item>
          <Form.Item
            {...Layout}
            label="什么事"
            name="doSth"
            rules={[{ required: true, message: '必填啊' }]}
          >
            <Input {...InputProp} />
          </Form.Item>
          <Form.Item
            {...Layout}
            label="其实是"
            name="whatis"
            rules={[{ required: true, message: '必填啊' }]}
          >
            <Input {...InputProp} />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              生成
            </Button>
          </Form.Item>
        </Form>
      </Col>
      <Col xs={24} sm={24} md={12} className={styles.mgCol}>
        {result}
      </Col>
    </Row>
  );
};
