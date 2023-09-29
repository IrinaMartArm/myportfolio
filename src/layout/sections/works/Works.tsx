import React, { useState } from "react";
import { S } from "./WorksStyles";
import { Title } from "../../../components/Title";
import { Wrapper } from "../../../components/Wrapper";
import { Menu } from "./Menu";
import { Work } from "./Work";
import network from "./../../../assets/images/pictures/4575 1.png";
import { Container } from "../../../components/Container";
import { StatusType } from "./Menu";
import { AnimatePresence, motion } from "framer-motion"

const worksitems: Array<{status: StatusType, title: string}> = [
  {
    title: 'All',
    status: 'all'
  },
  {
    title: 'Landing page',
    status: 'landing page'
  },
  {
    title: 'React',
    status: 'react'
  },
  {
    title: 'spa',
    status: 'spa'
  },
];

const worksData = [
  {
    id: 1,
    title: "Social Network",
    image: network,
    type: "spa",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim.",
  },
  {
    id: 2,
    title: "Adaptive Landings",
    image: network,
    type: "react",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim.",
  },
  {
    id: 3,
    title: "Adaptive Landings",
    image: network,
    type: "react",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim.",
  },
];

export const Works: React.FC = () => {
  const [status, setstatus] = useState('all')
  let filteredWorks = worksData
  if(status === 'landing page') {
    filteredWorks = worksData.filter(work => work.type === 'landing page')
  }
  if(status === 'react') {
    filteredWorks = worksData.filter(work => work.type === 'react')
  }
  if(status === 'spa') {
    filteredWorks = worksData.filter(work => work.type === 'spa')
  }

  function changeStatus(value: StatusType) {
    setstatus(value)
  }
  
  return (
    <S.Works id="works">
      <Container>
        <Title>My Works </Title>
        <Menu items={worksitems} 
              changeStatus={changeStatus}
              status={status} />
        <Wrapper justify="space-around" wrap="wrap" gap="30px">
          <AnimatePresence>
            {filteredWorks.map((w) => {
              return (
                <motion.div style={{maxWidth: "500px", width: "300px", flexGrow: 1}}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            key={w.id}
                            layout>
                  <Work key={w.id} title={w.title} text={w.text} image={w.image} />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </Wrapper>
      </Container>
    </S.Works>
  );
};
