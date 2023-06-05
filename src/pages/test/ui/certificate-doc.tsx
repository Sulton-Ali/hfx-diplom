import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import logo1 from "../../../assets/images/doc_log_1.png";
import logo2 from "../../../assets/images/doc_logo_2.jpg";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "lime",
    padding: "20px 30px",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    rowGap: 40,
  },
  images: {
    width: '100%',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo1: {
    width: 400,
    height: 100,
  },
  logo2: {
    width: 150,
    height: 100,
  },
  name: {
    color: "red",
    textTransform: "uppercase",
    fontSize: "36px",
    fontWeight: "bold",
  },
  ball: {
    color: "red",
    textTransform: "uppercase",
    fontSize: "36px",
    fontWeight: "bold",
  },
  text: {
    color: "black",
    textTransform: "uppercase",
    fontSize: "36px",
    fontWeight: "bold",
  },
});

type CertificateDocProps = {
  name: string;
  ball: number;
};

export function CertificateDoc({ name, ball }: CertificateDocProps) {
  return (
    <Document>
      <Page size="A4" orientation="landscape" style={styles.page}>
        <View style={styles.images}>
          <Image src={logo1} style={styles.logo1} />
          <Image src={logo2} style={styles.logo2} />
        </View>
        <View>
          <Text style={styles.text}>
            <Text style={styles.name}>{name}</Text> SIZ RAHBAR XODIMLAR VA
            MUTAXASISLAR UCHUN KURS O‘QISHI VA BILIMLAR SINOVI CHIQISH TESTI
            IMTIHONIDAN <Text style={styles.ball}>{ball}</Text> BALL BILAN
            MUVOFAQQIYATLI O`TDINGIZ.
          </Text>
        </View>
      </Page>
    </Document>
  );
}
