package TeamRocket.webapp.model;

public class Hulpverlener {
	private String naam;
	private String wachtwoord;
	
	public Hulpverlener(String naam, String wachtwoord) {
		super();
		this.naam = naam;
		this.wachtwoord = wachtwoord;
	}

	public String getNaam() {
		return naam;
	}

	public void setNaam(String naam) {
		this.naam = naam;
	}

	public String getWachtwoord() {
		return wachtwoord;
	}

	public void setWachtwoord(String wachtwoord) {
		this.wachtwoord = wachtwoord;
	}

	@Override
	public String toString() {
		return "Hulpverlener [naam=" + naam + ", wachtwoord=" + wachtwoord + "]";
	}
	
}
