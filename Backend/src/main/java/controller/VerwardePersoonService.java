package controller;

import javax.json.Json;
import javax.json.JsonArray;
import javax.json.JsonArrayBuilder;
import javax.json.JsonObjectBuilder;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import dao.VerwardePersoonDaoImpl;
import model.VerwardePersoon;

@Path("/persoon")
public class VerwardePersoonService {

	@GET
	@Produces("application/json")
	public String getVerwardePersonen() {
		VerwardePersoonDaoImpl verwardepersoonimpl = new VerwardePersoonDaoImpl();

		JsonArrayBuilder jab = Json.createArrayBuilder();

		for (VerwardePersoon verwardepersoon : verwardepersoonimpl.findAll()) {
			JsonObjectBuilder job = Json.createObjectBuilder();
			job.add("fotourl", verwardepersoon.getFotourl());
			job.add("geboortedatum", verwardepersoon.getGeboortedatum());
			job.add("adres", verwardepersoon.getAdres());
			job.add("telefoon", verwardepersoon.getTelefoon());
			job.add("verzekeringsgegevens", verwardepersoon.getVerzekeringsgegevens());
			job.add("vertrouwenspersoon1", verwardepersoon.getVertrouwenspersoon1());
			job.add("vertrouwenspersoon2", verwardepersoon.getVertrouwenspersoon2());
			job.add("huisarts", verwardepersoon.getHuisarts());

			jab.add(job);
		}

		JsonArray array = jab.build();
		return array.toString();
	}
}
