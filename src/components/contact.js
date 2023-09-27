import React from 'react';
import '../css/style.css';


const Contact = (props) => {

    return (
        <>
            <div className='contact-display'>
                <div className='contact scale-in-ver-top'>
                    <h1>ΕΠΙΚΟΙΝΩΝΙΑ</h1>
                    <h4>ΛΕΩΝΙΔΑΚΗ-ΚΟΚΚΑΛΑΡΑ Γ.</h4>
                    <p>ΚΟΖΑΝΗΣ 33 ΓΙΑΝΝΟΥΛΗ ΛΑΡΙΣΑΣ</p>
                    <p><i class="fa-solid fa-phone"></i>  2410592532</p>
                    <p><i class="fa-solid fa-envelope"></i>  gleonidaki@hotmail.gr</p>
                </div>
                <div ref={props.myRef9} className={props.MyElementIsVisible9 ? "scale-in-hor-right about-us" : "about-us"}>
                    <div className="info-about-us">
                        <h1>Σχετικά με εμάς</h1>
                        <h3>ΚΟΚΚΑΛΑΡΑ ΓΙΑΝΝΟΥΛΑ</h3>
                        <p>Το κατάστημά μας λειτουργεί από το 2004 στην περιοχή<br />
                        Γιάννουλη Λάρισας στην οδό Κοζάνης 33. Θα βρείτε προϊόντα<br />
                        για να βάψετε το σπίτι σας σε επαγγελματικές τιμές και με<br /> 
                        την καλύτερη εξυπηρέτηση. Επίσης θα βρείτε όλων των ειδών<br /> 
                        εργαλία και σιδηρικά. Τέλος, αν είστε δικαιούχος του εξοικονομώ<br /> 
                        κατ’ οίκον ή και μη, διαθέτουμε αξιόπιστα συστήματα θερμομόνωσης.<br />
                            <br />
                            Με εκτίμηση,<br /> 
                            Tο κατάστημά μας <strong>ΛΕΩΝΙΔΑΚΗ-ΚΟΚΚΑΛΑΡΑ Γ.</strong>. <br/><br />   
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Contact;
