import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
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



function CheckoutCard() {
  const theme = useMantineTheme();
  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];


  return (
    <Box mt={5} ml={"auto"} mr={"auto"} width="300px">
      <Card shadow="sm" p="lg">
        <Card.Section>
          <Image
            src="https://static.remove.bg/remove-bg-web/f4b1a5b6ab0be77785c26078f8a7569489d184da/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg"
            height={160}
            alt="Norway"
          />
        </Card.Section>

        <Group
          position="apart"
          style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
        >
          <Text weight={500}>asd</Text>
          <Badge color={5 > 0 ? "green" : "red"} variant="light">
            {3 > 0 ? "In Stock" : "Out Of Stock"}
          </Badge>
        </Group>

        <Text
          size="sm"
          style={{ color: secondaryColor, lineHeight: 1.5, marginLeft: 50 }}
        >
          adasdaSDAsdasdadadadas dasdasdasd.
        </Text>
        <Text
          size="sm"
          style={{ color: secondaryColor, lineHeight: 1.5, marginLeft: 50 }}
        >
          We have only {5} PCS
        </Text>
        <h4 className="price">LKR {33333}</h4>

        <Rating name="read-only" value={4} readOnly />

        <Button
          variant="light"
          color="blue"
          fullWidth
          style={{ marginTop: 14 }}
          //   onClick={addToBasket}
          disabled={5 < 1 ? true : false}
        >
          Remove Item
          <DeleteIcon style={{ marginLeft: 20 }} />
        </Button>
      </Card>
    </Box>
  );
}

export default CheckoutCard;
