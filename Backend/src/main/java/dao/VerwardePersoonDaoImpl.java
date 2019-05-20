package dao;

import java.util.ArrayList;
import java.util.List;

import model.VerwardePersoon;

public class VerwardePersoonDaoImpl implements VerwardePersoonDao{
	private List<VerwardePersoon> verwardepersoon = new ArrayList<VerwardePersoon>();
	
	public List<VerwardePersoon> findAll() {
		VerwardePersoon verwardepersoon1 = new VerwardePersoon("https://www.sportvisserijnederland.nl/img/de-vis-centraal_264x275_78075.png", "25-07-1955", "Janstraat 15 4774DS Osso", "0684521584", "VGZ", "Naam: Henk (Buurman) Adres: Herculesplein 88 Gemeente: Utrecht Bereikbaar via: 06-123 456 789", "Bereikbaar via: 06-123 456 789", "Naam: Jos Telefoonnummer: 064859215487 Adres: loesoe 12 8748CS Blok");
		
		verwardepersoon.add(verwardepersoon1);
		return verwardepersoon;
	}
}
