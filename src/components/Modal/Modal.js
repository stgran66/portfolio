import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import Typewriter from 'typewriter-effect/dist/core';
import ModalKeyboard from '../ModalKeyboard/ModalKeyboard';

import { Backdrop, Content } from './Modal.styled';

export const Modal = ({ show, onClose, project }) => {
  const { description, title, technologies, link, repoLink } = project;

  useEffect(() => {
    const container = document.querySelector('.modal-content');
    const typewriter = new Typewriter(container, {
      loop: false,
      delay: 10,
    });

    typewriter
      .pauseFor(150)
      .typeString(`$ / > Project name: ${title}<br>`)
      .pauseFor(200)

      .typeString(`$ / > Short info: ${description}<br>`)
      .pauseFor(150)
      .typeString(`$ / > Tech stack ${technologies}<br>`)
      .pauseFor(100)
      .typeString(`$ / > Visit website (press W)<br>`)
      .pauseFor(200)
      .typeString(`$ / > Visit code repository (press R)<br>`)
      .pauseFor(150)
      .typeString(`$ / > Quit (press Esc)<br>`)
      .start();
  }, [description, technologies, title]);

  useEffect(() => {
    const closeOnEsc = (e) => {
      if ((e.charCode || e.keyCode) === 27) {
        onClose();
      }
    };
    if (show) {
      document.body.addEventListener('keydown', closeOnEsc);
      return () => {
        document.body.removeEventListener('keydown', closeOnEsc);
      };
    }
  }, [show, onClose]);

  useEffect(() => {
    const redirectToWebsite = (e) => {
      if ((e.charCode || e.keyCode) === 87) {
        window.location.href = link;
        return;
      }
    };

    if (show) {
      document.body.addEventListener('keydown', redirectToWebsite);
      return () => {
        document.body.removeEventListener('keydown', redirectToWebsite);
      };
    }
  }, [show, link]);

  useEffect(() => {
    const redirectToCodeRepo = (e) => {
      if ((e.charCode || e.keyCode) === 82) {
        window.location.href = repoLink;
        return;
      }
    };

    if (show) {
      document.body.addEventListener('keydown', redirectToCodeRepo);
      return () => {
        document.body.removeEventListener('keydown', redirectToCodeRepo);
      };
    }
  }, [show, repoLink]);

  return ReactDOM.createPortal(
    <Backdrop onClick={onClose}>
      <Content className='modal-content' onClick={(e) => e.stopPropagation()} />
      {window.innerWidth < 1200 && (
        <ModalKeyboard link={link} repoLink={repoLink} onClose={onClose} />
      )}
    </Backdrop>,
    document.getElementById('root')
  );
};
