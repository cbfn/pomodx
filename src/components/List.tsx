import React, { useRef } from "react";
import { useObserver } from "mobx-react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { tasks } from "../firebase";
import spinner from "../spinner.svg";
import ListItem from "./ListItem";

export default function TaskList() {
  const nodeRef = useRef(null);
  return useObserver(() => {
    const { docs } = tasks;
    return (
      <ul>
        <TransitionGroup className="task-list">
          {docs.map((task: any, index: number) => (
            <CSSTransition
              key={task.id}
              nodeRef={nodeRef}
              in
              timeout={600}
              classNames="item"
            >
              <ListItem task={task} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ul>
    );
  });
}
