import React from "react";
import { Card, Popover } from "antd";
import styled from "styled-components";
import { GithubOutlined, GoogleOutlined } from "@ant-design/icons";
function AntCard(props) {
  const Logo = styled.div`
    display: flex;
    width: 20%;
    justify-content: space-around;
  `;
  const { Meta } = Card;
  return (
    <Card
      hoverable={true}
      style={{
        width: 300,
        boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
        margin: "10px",
      }}
      cover={
        <img alt="example" src={props.image} style={{ minHeight: "200px" }} />
      }
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "10px",
        }}
      >
        <Meta title={props.title} />
        <Logo>
          <Popover
            content={
              <a href={props.project} target="_blank" rel="noreferrer">
                {props.title}
              </a>
            }
            title="Decouvrir"
          >
            <GoogleOutlined />
          </Popover>
          <Popover
            content={
              props.githubDispo ? (
                <a href={props.github} target="_blank" rel="noreferrer">
                Github
                </a>
              ) : (
                props.github
              )
            }
            title="Github"
          >
            <GithubOutlined />
          </Popover>
        </Logo>
      </div>
      <Meta description={props.description} />
    </Card>
  );
}

export default AntCard;
