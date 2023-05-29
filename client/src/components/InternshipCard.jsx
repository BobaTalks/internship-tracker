import React from "react";
import { Card, CardContent } from "@mui/material";
import JobDescription from "./JobDescription";

/**
 * https://github.com/BobaTalks/internship-tracker/issues/25
 * Component for the internship card. should take an Internship as props
 *
 */
const prr = "Lorem ipsum dolor sit amet consectetur. ";
const poo = "Maecenas at lobortis dolor quisque cras amet. ";
const pee = "Iaculis sagittis non netus justo laoreet imperdiet.";
const paa = " Amet nibh sodales fermentum id nibh egestas maecenas. ";
const pii = "Tempor blandit ultrices aliquet donec ornare lectus. ";
const puu = "Vestibulum ac aliquam et aliquam amet facilisis ";
const pug = "blandit posuere consectetur. ";
const pyy = "Risus molestie tristique pharetra venenatis aenean ";
const pzz = "tellus faucibus. Libero sit massa id...";
const mockDescription = prr + poo + pee + paa + pii + puu + pug + pyy + pzz;

const InternshipCard = () => {
  return (
    <Card>
      <CardContent>
        <JobDescription description={mockDescription} />
      </CardContent>
    </Card>
  );
};

export default InternshipCard;
