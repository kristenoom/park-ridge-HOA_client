import { Accordion, AccordionItem, AccordionHeader } from 'reactstrap';

const Covenants = () => {
    return (
        <div>
  <Accordion
    open="1"
    toggle={function noRefCheck(){}}
  >
    <AccordionItem>
      <AccordionHeader targetId="1">
        Article I
      </AccordionHeader>
      <AccordionItem accordionId="1">
        <strong>
          Section 1. 
        </strong>
        'Association' shall mean and refer to the Park Ridge Community Association
      </AccordionItem>
    </AccordionItem>
    <AccordionItem>
      <AccordionHeader targetId="2">
        Article II
      </AccordionHeader>
      <AccordionItem accordionId="2">
        <strong>
          This is the second item's accordion body.
        </strong>
        You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
      </AccordionItem>
    </AccordionItem>
        <AccordionItem>
            <AccordionHeader targetId="3">
            Article III
            </AccordionHeader>
            <AccordionItem accordionId="3">
            <strong>
            This is the third item's accordion body.
            </strong>
            You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the            , though the transition does limit overflow.
            </AccordionItem>
                </AccordionItem>
                <AccordionItem>
            <AccordionHeader targetId="4">
            Article IV
            </AccordionHeader>
            <AccordionItem accordionId="4">
            <strong>
            This is the third item's accordion body.
            </strong>
            You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the            , though the transition does limit overflow.
            </AccordionItem>
                </AccordionItem>
                

                <AccordionItem>
            <AccordionHeader targetId="5">
            Article V - Architectural Control
            </AccordionHeader>
            <AccordionItem accordionId="5">
                        <p>No building, fence, wall, deck, swimming pool or spa, or other structure shall be commenced, erected, or maintained upon any Lot, nor shall any exterior addition to or change or alteration therein be made until two sets of plans and specifications showing: (1) the location of improvements of the lot (site plan); (2) the location of the driveway on the site plan; (3) front, rear, and side elevations shall have been submitted to and approved in writing as to harmony of external design and location in relation to surrounding structures and topography by the Architectural Control Committee. The Committee's approval or disapproval, as required in these covenants, shall be in writing. In the even the Committee fails to approve or disapprove such plans within 60 days after receipt, such plans shall be deemed approved. No structure of any kind which does not comply fully with such approved plans shall be errected, constructed, placed or maintained upon any Lot, and no changes or deviations in or from such plans as approved shall be made without the Committee's prior written consent. Neither the Developer, the Architectural Control Committee, nor any member thereof, nor any of their respective heirs, personal representatives, successors, or assigns shall be liable to anyone by reason of any mistake in judgment, negligence, or nonfeasance arising out of or relating to the approval or disapproval or failure to approve any plans so submitted, nor shall they, or any of them, be responsible or liable for any structural defects in such plans or in any building or structure erected according to such plans or any drainage problems resulting there from. Every person and entity who submits plans to the Architectural Control Committee agrees, by submission of such plans, that he or it will not bring any action or suit against the Committee or the Developer to recover any damages or to require the Committee or the Developer to take, or refrain from taking, any action whatever in regard to such plans or in regard to any building or structure erected in accordance therewith. Neither the submission of any complete set(s) of plans to the Developer's office for review by the Architectural Control Committee, nor the approval thereof by that Committee, shall be deemed to guarantee or require the actual construction of the building of structure therin described, and no adjacent Lot Owner may claim any reliance upon the submission and/or approval of any such plans or the buildings or structures described therin. In the event the Committee or the Association shall prevail in any litigation brought for the purpose of enforcing compliance with the provisions of this Article V, it shall be entitled to recover from the defendants reasonable attorney fees and costs incurred in such enforcement.</p>
            </AccordionItem>
                </AccordionItem>
                <AccordionItem>
            <AccordionHeader targetId="6">
            Article VI - General Provisions
            </AccordionHeader>
            <AccordionItem accordionId="6">
            <strong>Section 1. Residential Purposes. </strong>
            No Lot shall be used except for residential purposes. No building shall be erected, altered, placed, or permitted to remain on any Lot other than one detached single-family dwelling not to exceed two and one-half stories in height. Each Dwelling Unit shall include not less than a two car garage, which shall be built as part of said structure and attached thereto.
            </AccordionItem>
        </AccordionItem>
  </Accordion>
</div>
    )
}

export default Covenants;