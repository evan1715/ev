import Container from 'react-bootstrap/Container';

const About = () => (
    <Container className="border border-warning p-4 d-flex justify-content-center flex-column">
        <h1 className="text-center">About</h1>
        <p className="text-center">This page hasn't been completed yet. I apologize and it will be ready soon. Meanwhile, enjoy the colors! ;p</p>
        
        <div className="mt-5">
            <h4 className="text-center">Color theme of website compared</h4>
            <div className="w-100 bar-color1">cyan</div>
            <div className="w-100 bar-color2">turquoise</div>
            <div className="w-100 bar-color3">teal</div>
            <div className="w-100 bar-color4">light green</div>
            <div className="w-100 bar-color5">green</div>
            <div className="w-100 bar-color6">dark green</div>
            <div className="w-100 bar-color7">orange</div>
            <div className="w-100 bar-color8">dark orange/brown</div>
        </div>
    </Container>
);

export { About as default }