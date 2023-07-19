import { useTheme, Text, Spacer, Link } from "@nextui-org/react"
import Image from "next/image";
import NextLink from "next/link";

export const Navbar = () => {

    const {theme} = useTheme();

  return (
    <div style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0 20px',
        backgroundColor: theme?.colors.gray900.value
    }}>
        <Image 
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
          alt="icono de la app"
          width={70}
          height={70}
        />

        {/* <NextLink href={"/"} passHref> */}
          <Link href="/">
            <Text color="white" h2>P</Text>
            <Text color="white" h3>okémon</Text>
          </Link>
        {/* </NextLink> */}
        <Spacer css={{flex: 1}} />

        {/* <NextLink href={"/favoritos"} passHref> */}
          <Link href="/favoritos">
            <Text color="white">Favoritos</Text>
          </Link>
        {/* </NextLink> */}
    </div>
  )
}
