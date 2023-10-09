import Layout from "@/components/layout"
import styles from "../styles/Home.module.css"
import Card1 from "@/components/Card1"
import Categories from "@/components/Categories";

export default function Home() {
  return (
    <>
    <Layout>
      <div>
        <Card1  />
        <Categories/>
      </div>
    </Layout>
     
    </>
  )
}
