import Section from "../components/section";

export default function ContactSection() {
    return (
        <Section title="Contact">
            <table className="table-auto mr-auto">
                <tbody>
                    <tr>
                        <td className="pr-4 py-2">Email:</td>
                        <td className="py-2 text-gray-500">shanifsheikh.18@gmail.com</td>
                    </tr>
                    <tr>
                        <td className="pr-4 py-2">Phone:</td>
                        <td className="py-2 text-gray-500">+92 309 8680282</td>
                    </tr>
                </tbody>
            </table>
        </Section>
    );
}