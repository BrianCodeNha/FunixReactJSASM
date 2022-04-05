import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    Breadcrumb,
    BreadcrumbItem,
  } from "reactstrap";
  import { baseUrl } from "../shared/baseUrl";


export default function RenderDish(props) {
    return (
      <div>
        <Card>
          <CardImg top src={baseUrl + props.dish.image} alt={props.dish.name} />
          <CardBody>
            <CardTitle style={{ textAlign: "left", fontWeight: "bold" }}>
              {props.dish.name}
            </CardTitle>
            <CardText style={{ textAlign: "left" }}>
              {props.dish.description}
            </CardText>
          </CardBody>
        </Card>
      </div>
    );
  }