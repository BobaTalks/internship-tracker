import React from "react";
import { Card, CardContent } from "@mui/material";
import JobDescription from "./JobDescription";

/**
 * https://github.com/BobaTalks/internship-tracker/issues/25
 * Component for the internship card. should take an Internship as props
 *
 */
const mockDescription =
  "Lorem ipsum dolor sit amet consectetur. Maecenas at lobortis dolor quisque cras amet. Iaculis sagittis non netus justo laoreet imperdiet. Amet nibh sodales fermentum id nibh egestas maecenas. Tempor blandit ultrices aliquet donec ornare lectus. Vestibulum ac aliquam et aliquam amet facilisis blandit posuere consectetur. Risus molestie tristique pharetra venenatis aenean tellus faucibus. Libero sit massa id...Nulla sit integer nec arcu tortor ac lectus morbi non. Quam aenean tincidunt blandit amet magna enim sed pharetra habitasse. At nec neque suspendisse feugiat eros. Ante a arcu donec sodales ut amet luctus mauris. Felis eu mauris fringilla mauris. Viverra ante iaculis gravida a amet cursus facilisis scelerisque. Leo sit nulla sit vel nibh amet justo aliquam. Risus ullamcorper vitae amet ornare adipiscing vulputate dapibus diam ultrices. Arcu malesuada dui integer non. Aliquet non tortor adipiscing laoreet leo ac pretium fusce nisi.";
const mockRequirements =
  "- Vitae consectetur egestas ullamcorper orci pulvinar mattis commodo et morbi.\n- Tempus sodales etiam dictumst massa donec.\n- Varius mi massa mi sed cursus mattis. Viverra pharetra vel et neque non ut.\n- Urna luctus consectetur scelerisque quisque augue lectus amet amet.";
const mockResponsibilities =
  "- Vitae consectetur egestas ullamcorper orci pulvinar mattis commodo et morbi.\n- Varius mi massa mi sed cursus mattis. Viverra pharetra vel et neque non ut.";
const mockExternalLink = "http://localhost:3000/";

const InternshipCard = () => {
  return (
    <Card>
      <CardContent>
        <JobDescription
          description={mockDescription}
          requirements={mockRequirements}
          responsibilities={mockResponsibilities}
          externalLink={mockExternalLink}
        />
      </CardContent>
    </Card>
  );
};

export default InternshipCard;
