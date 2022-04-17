import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  useMantineTheme
} from "@mantine/core";
import { Rating } from "@mui/material";
import { Box } from "@mui/system";
import { useStateValue } from "../store/StateProvider";
function CollectionCard(props) {
  const theme = useMantineTheme();
  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];

  const [{}, dispatch] = useStateValue();
  const addToBasket = (e) => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: props.id,
        title: props.title,
        image: props.image,
        price: props.price,
        rating: props.rating,
        description: props.description,
        quantity: props.quantity
      }
    });
  };

  //steps to  access the image through url
  const fileUrl = props.image.replace(/\\/g, "/");
  const imageArray = fileUrl.split("/");
  const imageUrl = `${"http://localhost:5000"}/${imageArray[1]}`;

  return (
    <Box mt={5} ml={"auto"} mr={"auto"} width="300px">
      <Card shadow="sm" p="lg">
        <Card.Section>
          <Image src={imageUrl} height={160} alt="Norway" />
        </Card.Section>

        <Group
          position="apart"
          style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
        >
          <Text weight={500}>{props.title}</Text>
          <Badge color={props.quantity > 0 ? "green" : "red"} variant="light">
            {props.quantity > 0 ? "In Stock" : "Out Of Stock"}
          </Badge>
        </Group>

        <Text
          size="sm"
          style={{ color: secondaryColor, lineHeight: 1.5, marginLeft: 50 }}
        >
          {props.description} .
        </Text>
        <Text
          size="sm"
          style={{ color: secondaryColor, lineHeight: 1.5, marginLeft: 50 }}
        >
          We have only {props.quantity} PCS
        </Text>
        <h4 className="price">LKR {props.price}</h4>

        <Rating name="read-only" value={props.rating} readOnly />

        <Button
          variant="light"
          color="blue"
          fullWidth
          style={{ marginTop: 14 }}
          onClick={addToBasket}
          disabled={props.quantity < 1 ? true : false}
        >
          ADD TO CART
          <AddShoppingCartIcon style={{ marginLeft: 20 }} />
        </Button>
      </Card>
    </Box>
  );
}

export default CollectionCard;
