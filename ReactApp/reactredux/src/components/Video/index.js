import React from 'react';
import { connect } from 'react-redux'

const Video = ({ activeModule, activeLesson }) => (
    <>
        <strong>Módulo:</strong> {activeModule.title} <br />
        <strong>Aula:</strong> {activeLesson.title}
    </>
);

export default connect(state => ({
    activeLesson: state.course.activeLesson,
    activeModule: state.course.activeModule
}))(Video);