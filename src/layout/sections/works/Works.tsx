import React, { useState } from "react";
import { S } from "./WorksStyles";
import { Title } from "../../../components/Title";
import { Wrapper } from "../../../components/Wrapper";
import { Menu } from "./Menu";
import { Work } from "./Work";
import todo from "../../../assets/images/pictures/todo.png"
import quiz from "../../../assets/images/pictures/quiz.png"
import sarmed from "./../../../assets/images/pictures/sarmed.png"
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
    href: "",
    text: "",
  },
  {
    id: 2,
    title: "QuizUp!",
    image: quiz,
    type: "spa",
    href: "https://quiz-up-chi.vercel.app/?minCardsCount=0&maxCardsCount=61",
    text: "Learning by creating decks of cards with questions and answers.",
  },
  {
    id: 3,
    title: "Sarmed",
    image: sarmed,
    type: "spa",
    href: "https://www.sarmed.am/main",
    text: "Brand representatives website.",
  },
  {
    id: 4,
    title: "Todo List",
    image: todo,
    type: "spa",
    href: "",
    text: "Сompiling a list of to-dos and tasks including their priorities.",
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
                  <Work href={w.href} key={w.id} title={w.title} text={w.text} image={w.image} />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </Wrapper>
      </Container>
    </S.Works>
  );
};
