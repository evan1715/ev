import Container from 'react-bootstrap/Container';

const About = () => (
    <Container className="border border-warning p-4 d-flex justify-content-center flex-column">
        <div className="w-100 bar-color1">cyan</div>
        <div className="w-100 bar-color2">turquoise</div>
        <div className="w-100 bar-color3">teal</div>
        <div className="w-100 bar-color4">light green</div>
        <div className="w-100 bar-color5">green</div>
        <div className="w-100 bar-color6">dark green</div>
        <div className="w-100 bar-color7">orange</div>
        <div className="w-100 bar-color8">dark orange/brown</div>
    </Container>
);

export { About as default }