import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useInView } from 'react-intersection-observer';
import NavBar from "./NavBar";
import ChoiceColor from "./ChoiceColor";
import Color from "./Colors";
import ColorInterior from "./ColorInterior";
import Carousel from "./Carousel";
import Tools from "./Tools";
import Monosi from "./Monosi"
import Contact from "./contact";
import Footer from "./Footer";
import Info from "./info";
import InfoRight from "./InfoRight";
import colors from "../assets/images/colors.png";
import tools from "../assets/images/yato-tools.jpg";
import monosi from "../assets/images/Bioclima.jpg";
import image1 from "../assets/images/4Seasons_New.jpg";
import image2 from "../assets/images/master.jpg";

const App = () => {
    const { ref: myRef4, inView: MyElementIsVisible4 } = useInView();
    const { ref: myRef5, inView: MyElementIsVisible5 } = useInView();
    const { ref: myRef6, inView: MyElementIsVisible6 } = useInView();
    const { ref: myRef7, inView: MyElementIsVisible7 } = useInView();
    const { ref: myRef8, inView: MyElementIsVisible8 } = useInView();
    const { ref: myRef9, inView: MyElementIsVisible9 } = useInView();
        
    
    return (
        <BrowserRouter>
            <div>
                    <Routes>
                        <Route path="/" element={
                            <div>
                                <header>
                                    <NavBar index={0} />
                                </header>
                                <main>
                                <Carousel />
                                
                                <Info 
                                img={colors} alt="Colors" width="100%" height="auto" paragraph="Το κατάστημά μας διαθέτει μεγάλη γκάμα χρωμάτων 
                                των μεγαλύτερων εταιριών στην Ελλάδα και στις καλυτερες
                                        τιμές της αγοράς! Βάψτε τώρα το σπίτι σας με τα καλύτερα σε ποιότητα χρώματα." 
                                        url="Χρώματα"
                                />
                                
                                <InfoRight 
                                    img={tools} alt="Tools" width="100%" height="auto" paragraph="Ανακαλύψτε όλα τα είδη εργαλείων χειρός, 
                                    μπαταρίας, καθώς και ηλεκτρικών εργαλείων. Το κατάστημα διαθέτει προϊόντα της εταιρίας YATO Tools, FF Group Tools
                                    και Bennman. " 
                                />
                                <Info 
                                    img={monosi} alt="Monosi" width="100%" height="auto" paragraph="Αξιόπιστα συστήματα θερμομόνωσης της Bioclima για τους δικαιούχους 
                                    του εξοικονομώ κατ’ οίκον και μη, σε ασυναγώνιστες τιμές!" 
                                            url="Μονώσεις"
                                />
                                </main>
                            </div>
                        } />
                        <Route path="/Αρχική" element={
                        <div>
                            <header>
                                <NavBar index={0} />
                            </header>
                            <main>
                            <Carousel />
                            
                            <Info 
                            img={colors} alt="Colors" width="100%" height="auto" paragraph="Το κατάστημά μας διαθέτει μεγάλη γκάμα χρωμάτων 
                            των μεγαλύτερων εταιριών στην Ελλάδα και στις καλυτερες
                                    τιμές της αγοράς! Βάψτε τώρα το σπίτι σας με τα καλύτερα σε ποιότητα χρώματα." 
                                    url="Χρώματα"
                            />
                            
                            <InfoRight 
                                img={tools} alt="Tools" width="100%" height="auto" paragraph="Ανακαλύψτε όλα τα είδη εργαλείων χειρός, 
                                μπαταρίας, καθώς και ηλεκτρικών εργαλείων. Το κατάστημα διαθέτει προϊόντα της εταιρίας YATO Tools, FF Group Tools
                                και Bennman." 
                            />
                            <Info 
                                img={monosi} alt="Monosi" width="100%" height="auto" paragraph="Αξιόπιστα συστήματα θερμομόνωσης της Bioclima για τους δικαιούχους 
                                του εξοικονομώ κατ’ οίκον και μη, σε ασυναγώνιστες τιμές!" 
                                        url="Μονώσεις"
                            />
                            </main>
                        </div>
                        } />
                        <Route path="/Χρώματα" element={
                            <div>
                                <header>
                                    <NavBar index={1} />
                                </header>
                                <main>
                                    <ChoiceColor 
                                        myRef4={myRef4} MyElementIsVisible4={MyElementIsVisible4} 
                                        src1={image1} alt1="Exterior" paragraph1="Εξωτερικού χώρου"
                                        myRef5={myRef5} MyElementIsVisible5={MyElementIsVisible5} 
                                        src2={image2} alt2="Interior" paragraph2="Εσωτερικού χώρου"
                                    />
                                </main>
                            </div>
                        } />
                        <Route path="/Exterior" element={
                            <div>
                                <header>
                                    <NavBar index={1} />
                                </header>
                                <main>
                                    <Color />
                                </main>
                            </div>
                        } />
                        <Route path="/Interior" element={
                            <div>
                                <header>
                                    <NavBar index={1} />
                                </header>
                                <main>
                                    <ColorInterior />
                                </main>
                            </div>
                        } />
                        <Route path="/Εργαλεία" element={
                            <div>
                                <header>
                                    <NavBar index={2} />
                                </header>
                                <main>
                                    <Tools myRef6={myRef6} MyElementIsVisible6={MyElementIsVisible6}
                                            myRef7={myRef7} MyElementIsVisible7={MyElementIsVisible7} />
                                </main>
                            </div>
                        } />
                        <Route path="/Μονώσεις" element={
                            <div>
                                <header>
                                    <NavBar index={3} />
                                </header>
                                <main>
                                    <Monosi myRef8={myRef8} MyElementIsVisible8={MyElementIsVisible8}
                                    src={monosi} alt="Bioclma" />
                                </main>
                            </div>
                        } />
                        <Route path="/Επικοινωνία" element={
                            <div>
                                <header>
                                    <NavBar index={4} />
                                </header>
                                <main>
                                    <Contact myRef9={myRef9} MyElementIsVisible9={MyElementIsVisible9}/>
                                </main>
                            </div>
                        } />
                    </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;